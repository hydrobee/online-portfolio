import {
  DestroyRef,
  Directive,
  ElementRef,
  NgZone,
  afterNextRender,
  inject,
  input,
} from '@angular/core';

/**
 * Turns a horizontally scrollable element into an endless, auto-scrolling carousel.
 * Users can drag (mouse), swipe (touch) or use the trackpad; auto-scroll resumes
 * after `idleDelay` ms of inactivity.
 */
@Directive({
  selector: '[appAutoScroll]',
})
export class AutoScroll {
  /** Pixels per frame. Increase to go faster. */
  readonly scrollSpeed = input(0.5);
  /** Milliseconds of inactivity before auto-scroll resumes. */
  readonly idleDelay = input(5000);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  /** Aborting this removes every listener the directive registered. */
  private readonly listeners = new AbortController();
  private rafId = 0;
  private idleTimer?: number;
  private paused = false;
  private dragging = false;
  private pos = 0;
  private loopWidth = 0;
  private destroyed = false;

  constructor() {
    afterNextRender(() => void this.init());

    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
      this.listeners.abort();
      cancelAnimationFrame(this.rafId);
      clearTimeout(this.idleTimer);
    });
  }

  private async init(): Promise<void> {
    const el = this.host.nativeElement;

    // Wait for images to load so the widths are measured correctly.
    await this.waitForImages(el);
    if (this.destroyed) return;

    this.loopWidth = this.cloneItems(el);
    if (this.loopWidth <= 0) return;

    // Run listeners and the animation outside Angular so they don't trigger change detection.
    this.zone.runOutsideAngular(() => {
      this.bindInteractions(el);
      this.startLoop(el);
    });
  }

  private waitForImages(el: HTMLElement): Promise<unknown> {
    const imgs = Array.from(el.querySelectorAll('img'));
    return Promise.all(
      imgs.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise<void>((resolve) => {
              img.addEventListener('load', () => resolve(), { once: true });
              img.addEventListener('error', () => resolve(), { once: true });
            }),
      ),
    );
  }

  /** Clones the items enough times that there is always content to scroll into. */
  private cloneItems(el: HTMLElement): number {
    const items = Array.from(el.children) as HTMLElement[];
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const setWidth = items.reduce((sum, item) => sum + item.offsetWidth, 0) + gap * items.length;
    if (setWidth <= 0) return 0;

    const copies = Math.ceil(el.clientWidth / setWidth) + 1;
    for (let i = 0; i < copies; i++) {
      for (const item of items) {
        const clone = item.cloneNode(true) as HTMLElement;
        clone.setAttribute('aria-hidden', 'true');
        el.appendChild(clone);
      }
    }
    return setWidth;
  }

  private pause(): void {
    this.paused = true;
    clearTimeout(this.idleTimer);
  }

  /** Resumes auto-scrolling after `idleDelay` ms of no activity. */
  private scheduleResume(el: HTMLElement): void {
    clearTimeout(this.idleTimer);
    this.idleTimer = window.setTimeout(() => {
      this.pos = el.scrollLeft;
      this.paused = false;
    }, this.idleDelay());
  }

  private bindInteractions(el: HTMLElement): void {
    const { signal } = this.listeners;

    // Mouse drag
    el.addEventListener(
      'pointerdown',
      (e: PointerEvent) => {
        this.pause();
        if (e.pointerType === 'mouse') {
          this.dragging = true;
          el.setPointerCapture(e.pointerId);
          el.classList.add('dragging');
        }
      },
      { signal },
    );

    el.addEventListener(
      'pointermove',
      (e: PointerEvent) => {
        if (this.dragging) el.scrollLeft -= e.movementX;
      },
      { signal },
    );

    const endDrag = () => {
      this.dragging = false;
      el.classList.remove('dragging');
      this.scheduleResume(el);
    };
    el.addEventListener('pointerup', endDrag, { signal });
    el.addEventListener('pointercancel', endDrag, { signal });

    // Stop the browser from dragging the image itself
    el.addEventListener('dragstart', (e) => e.preventDefault(), { signal });

    // Trackpad or shift + wheel
    el.addEventListener(
      'wheel',
      (e: WheelEvent) => {
        if (e.deltaX !== 0) {
          this.pause();
          this.scheduleResume(el);
        }
      },
      { passive: true, signal },
    );

    // Keep the loop endless while the user scrolls, and reset the idle timer
    el.addEventListener(
      'scroll',
      () => {
        if (!this.paused) return;
        if (el.scrollLeft >= this.loopWidth) el.scrollLeft -= this.loopWidth;
        else if (el.scrollLeft <= 0) el.scrollLeft += this.loopWidth;
        if (!this.dragging) this.scheduleResume(el);
      },
      { signal },
    );
  }

  private startLoop(el: HTMLElement): void {
    const tick = () => {
      if (!this.paused) {
        this.pos += this.scrollSpeed();
        if (this.pos >= this.loopWidth) this.pos -= this.loopWidth;
        el.scrollLeft = this.pos;
      }
      this.rafId = requestAnimationFrame(tick);
    };
    tick();
  }
}
