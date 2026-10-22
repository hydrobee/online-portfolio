import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
// adjust this import to wherever your pill component lives
import { Pill } from '../reusable/pill/pill';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, Pill],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly email = 'stevecalvincarnell@gmail.com';

  model = { name: '', email: '', subject: '', message: '' };
  submitted = signal(false);

  send(form: NgForm) {
    this.submitted.set(true);
    if (form.invalid) return;

    const subject = this.model.subject.trim() || `Message from ${this.model.name}`;
    const body = `${this.model.message}\n\n— ${this.model.name} (${this.model.email})`;

    window.location.href =
      `mailto:${this.email}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }
}