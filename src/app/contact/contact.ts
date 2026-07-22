import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { SectionAnimationDirective } from '../shared/directives/section-animation';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterModule, SectionAnimationDirective],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent {
  successMessage = '';
  errorMessage = '';

  isSending = false;

  constructor(private translate: TranslateService) {}

  sendEmail(form: NgForm): void {
    if (!form.valid || this.isSending) {
      this.successMessage = '';

      this.errorMessage = this.translate.instant('contact.messages.invalid');

      return;
    }

    const formElement = document.getElementById('contact-form') as HTMLFormElement;

    if (!formElement) {
      this.errorMessage = this.translate.instant('contact.messages.error');

      return;
    }

    this.isSending = true;

    this.successMessage = '';
    this.errorMessage = '';

    emailjs
      .sendForm(
        environment.emailJsServiceId,
        environment.emailJsTemplateId,
        formElement,
        environment.emailJsPublicKey,
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.successMessage = this.translate.instant('contact.messages.success');

          this.errorMessage = '';

          form.resetForm();

          this.isSending = false;
        },

        (error) => {
          console.error('EmailJS Error:', error);

          this.errorMessage = this.translate.instant('contact.messages.error');

          this.successMessage = '';

          this.isSending = false;
        },
      );
  }

  scrollTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
