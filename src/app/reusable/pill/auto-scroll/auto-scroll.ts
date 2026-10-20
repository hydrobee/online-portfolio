import { AfterViewInit, Directive, ElementRef, Input, NgZone, OnDestroy } from '@angular/core';

@Directive({
  selector: '[autoScroll]',
  standalone: true,
})
export class AutoScroll implements AfterViewInit, OnDestroy {
  @Input() scrollSpeed = 0.5; // pixels per frame, increase to go faster
  @Input() idleDelay = 5000; // 5 seconds

  private rafId = 0;
  private idleTimer?: number;
  private paused = false;
  private pos = 0;
  private loopWidth = 0;
  private destroyed = false;

  constructor(
    private host: ElementRef<HTMLDivElement>,
    private zone: NgZone,
  ) {}

  async ngAfterViewInit() {
    const el = this.host.nativeElement;

    // Wait for images to load so the widths are measured correctly
    const imgs = Array.from(el.querySelectorAll('img'));
    await Promise.all(
      imgs.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise<void>((resolve) => {
              img.addEventListener('load', () => resolve(), { once: true });
              img.addEventListener('error', () => resolve(), { once: true });
            }),
      ),
    );
    if (this.destroyed) return;

    // Clone the items enough times that there is always content to scroll into
    const items = Array.from(el.children) as HTMLElement[];
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const setWidth = items.reduce((sum, item) => sum + item.offsetWidth, 0) + gap * items.length;
    if (setWidth <= 0) return;

    const copies = Math.ceil(el.clientWidth / setWidth) + 1;
    for (let i = 0; i < copies; i++) {
      items.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        clone.setAttribute('aria-hidden', 'true');
        el.appendChild(clone);
      });
    }
    this.loopWidth = setWidth;

    let dragging = false;

    const pause = () => {
      this.paused = true;
      clearTimeout(this.idleTimer);
    };

    // Resume auto scrolling after 5 seconds of no activity
    const resume = () => {
      clearTimeout(this.idleTimer);
      this.idleTimer = window.setTimeout(() => {
        this.pos = el.scrollLeft;
        this.paused = false;
      }, this.idleDelay);
    };

    // Mouse drag
    el.addEventListener('pointerdown', (e: PointerEvent) => {
      pause();
      if (e.pointerType === 'mouse') {
        dragging = true;
        el.setPointerCapture(e.pointerId);
        el.classList.add('dragging');
      }
    });

    el.addEventListener('pointermove', (e: PointerEvent) => {
      if (dragging) el.scrollLeft -= e.movementX;
    });

    const endDrag = () => {
      dragging = false;
      el.classList.remove('dragging');
      resume();
    };
    el.addEventListener('pointerup', endDrag);
    el.addEventListener('pointercancel', endDrag);

    // Stop the browser from dragging the image itself
    el.addEventListener('dragstart', (e) => e.preventDefault());

    // Trackpad or shift + wheel
    el.addEventListener(
      'wheel',
      (e: WheelEvent) => {
        if (e.deltaX !== 0) {
          pause();
          resume();
        }
      },
      { passive: true },
    );

    // Keep the loop endless while the user scrolls, and reset the 5 second timer
    el.addEventListener('scroll', () => {
      if (!this.paused) return;
      if (el.scrollLeft >= this.loopWidth) el.scrollLeft -= this.loopWidth;
      else if (el.scrollLeft <= 0) el.scrollLeft += this.loopWidth;
      if (!dragging) resume();
    });

    // Run the animation outside Angular so it doesn't trigger change detection every frame
    this.zone.runOutsideAngular(() => {
      const tick = () => {
        if (!this.paused) {
          this.pos += this.scrollSpeed;
          if (this.pos >= this.loopWidth) this.pos -= this.loopWidth;
          el.scrollLeft = this.pos;
        }
        this.rafId = requestAnimationFrame(tick);
      };
      tick();
    });
  }

  ngOnDestroy() {
    this.destroyed = true;
    cancelAnimationFrame(this.rafId);
    clearTimeout(this.idleTimer);
  }
}