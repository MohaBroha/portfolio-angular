import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ WICHTIG für ngIf
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ CommonModule hinzufügen
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {

  successMessage = '';
  errorMessage = '';

  sendEmail(form: NgForm) {
    if (!form.valid) {
      this.successMessage = '';
      this.errorMessage = 'Please fill in all required fields correctly.';
      return;
    }

    const formElement = document.getElementById('contact-form') as HTMLFormElement;
    if (!formElement) return;

    emailjs.sendForm(
      'service_5auolr6',
      'template_isntjdq', formElement,
      'cKmxg22XtA_5jd9zm'
    ).then(
      (result: EmailJSResponseStatus) => {
        this.successMessage = 'Thank you! Your message has been sent. 💌';
        this.errorMessage = '';
        form.resetForm();
      },
      (error) => {
        this.errorMessage = 'Oops! Something went wrong.';
        this.successMessage = '';
      }
    );
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
