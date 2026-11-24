import { DOCUMENT } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contact } from './contact';

describe('Contact', () => {
  let fixture: ComponentFixture<Contact>;
  let el: HTMLElement;
  let location: { href: string };

  const type = (selector: string, value: string) => {
    const input = el.querySelector<HTMLInputElement | HTMLTextAreaElement>(selector)!;
    input.value = value;
    input.dispatchEvent(new Event('input'));
  };
  const submit = async () => {
    el.querySelector<HTMLButtonElement>('button[type="submit"]')!.click();
    await fixture.whenStable();
  };

  beforeEach(async () => {
    location = { href: '' };
    // Proxy the real document so only `location` is stubbed (no real navigation in tests).
    const documentStub = new Proxy(document, {
      get: (target, prop) => (prop === 'location' ? location : Reflect.get(target, prop, target)),
    });

    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [{ provide: DOCUMENT, useValue: documentStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should show an error and not open the mail app when the form is invalid', async () => {
    await submit();

    expect(el.querySelector('.error')).toBeTruthy();
    expect(location.href).toBe('');
  });

  it('should open a prefilled mailto link when the form is valid', async () => {
    type('#name', 'Ada');
    type('#email', 'ada@example.com');
    type('#message', 'Hello!');
    await submit();

    expect(el.querySelector('.error')).toBeNull();
    expect(location.href).toMatch(/^mailto:/);
    expect(decodeURIComponent(location.href)).toContain('Message from Ada');
    expect(decodeURIComponent(location.href)).toContain('Hello!\n\n— Ada (ada@example.com)');
  });
});
