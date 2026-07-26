import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SectionAnimationDirective } from '../shared/directives/section-animation';
import emailjs from '@emailjs/browser';

/**
 * Contact section component.
 */
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

  /**
   * Creates a new contact component instance.
   *
   * @param translate The translation service used to localize feedback messages.
   */
  constructor(private translate: TranslateService) {}

  /**
   * Submits the contact form and sends the message.
   *
   * @param form The Angular form instance submitted by the user.
   * @returns {void}
   */
  sendEmail(form: NgForm): void {
    if (this.isFormInvalid(form)) {
      return;
    }

    const formElement = this.getContactForm();

    if (!formElement) {
      return;
    }

    this.prepareEmailRequest();

    this.sendEmailRequest(formElement, form);
  }

  /**
   * Checks whether the form submission is valid and ready to send.
   *
   * @param form The Angular form instance to validate.
   * @returns {boolean} True if the form is invalid or already sending.
   */
  private isFormInvalid(form: NgForm): boolean {
    if (!form.valid || this.isSending) {
      this.successMessage = '';
      this.errorMessage = this.translate.instant('contact.messages.invalid');
      return true;
    }

    return false;
  }

  /**
   * Retrieves the contact form element from the DOM.
   *
   * @returns {HTMLFormElement | null} The contact form element, if present.
   */
  private getContactForm(): HTMLFormElement | null {
    const formElement = document.getElementById('contact-form') as HTMLFormElement | null;

    if (!formElement) {
      this.errorMessage = this.translate.instant('contact.messages.error');
      return null;
    }

    return formElement;
  }

  /**
   * Prepares the component state for a new email submission.
   *
   * @returns {void}
   */
  private prepareEmailRequest(): void {
    this.isSending = true;
    this.successMessage = '';
    this.errorMessage = '';
  }

  /**
   * Sends the submitted form data to EmailJS.
   *
   * @param formElement The DOM form element to submit.
   * @param form The Angular form instance to reset after success.
   * @returns {void}
   */
  private sendEmailRequest(formElement: HTMLFormElement, form: NgForm): void {
    emailjs
      .sendForm(
        environment.emailJsServiceId,
        environment.emailJsTemplateId,
        formElement,
        environment.emailJsPublicKey,
      )
      .then(
        () => this.handleSuccess(form),
        (error) => this.handleError(error),
      );
  }

  /**
   * Handles a successful email submission.
   *
   * @param form The Angular form instance to reset.
   * @returns {void}
   */
  private handleSuccess(form: NgForm): void {
    this.successMessage = this.translate.instant('contact.messages.success');

    this.errorMessage = '';
    form.resetForm();
    this.isSending = false;
  }

  /**
   * Handles a failed email submission.
   *
   * @param error The error returned by EmailJS.
   * @returns {void}
   */
  private handleError(error: unknown): void {
    console.error('EmailJS Error:', error);

    this.errorMessage = this.translate.instant('contact.messages.error');

    this.successMessage = '';
    this.isSending = false;
  }

  /**
   * Scrolls the page to the top.
   *
   * @returns {void}
   */
  scrollTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
