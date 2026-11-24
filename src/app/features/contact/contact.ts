import { ChangeDetectionStrategy, Component, DOCUMENT, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PROFILE } from '../../core/config/profile';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly document = inject(DOCUMENT);

  protected readonly profile = PROFILE;
  protected readonly submitted = signal(false);

  protected readonly form = inject(NonNullableFormBuilder).group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', Validators.required],
  });

  protected send(): void {
    this.submitted.set(true);
    if (this.form.invalid) return;

    const { name, email, subject, message } = this.form.getRawValue();
    const mailSubject = subject.trim() || `Message from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;

    this.document.location.href =
      `mailto:${this.profile.email}?subject=${encodeURIComponent(mailSubject)}` +
      `&body=${encodeURIComponent(body)}`;
  }
}
