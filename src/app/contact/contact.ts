import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {

  successMessage = '';
  errorMessage = '';

  constructor(private translate: TranslateService) { }

  sendEmail(form: NgForm) {

    if (!form.valid) {
      this.successMessage = '';
      this.errorMessage = this.translate.instant('contact.messages.invalid');
      return;
    }

    const formElement = document.getElementById('contact-form') as HTMLFormElement;

    if (!formElement) return;

    emailjs.sendForm(
      'service_5auolr6',
      'template_isntjdq',
      formElement,
      'cKmxg22XtA_5jd9zm'
    ).then(
      (result: EmailJSResponseStatus) => {

        this.successMessage = this.translate.instant('contact.messages.success');
        this.errorMessage = '';

        form.resetForm();

      },
      (error) => {

        this.errorMessage = this.translate.instant('contact.messages.error');
        this.successMessage = '';

      }
    );
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}