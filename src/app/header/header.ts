import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../language.service';
import { HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';


/**
 * Header component.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule,     RouterLink,
],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  menuOpen = false;
  isVisible = true;

  /**
   * Creates a new header component instance.
   *
   * @param languageService The language service used to manage translations.
   */
  constructor(private languageService: LanguageService) {}

  /**
   * Gets the currently active language.
   *
   * @returns {string} The current language code.
   */
  get currentLang() {
    return this.languageService.currentLang;
  }

  /**
   * Switches the active language.
   *
   * @param lang The language to activate.
   * @returns {void}
   */
  switchLanguage(lang: 'de' | 'en') {
    this.languageService.use(lang);
  }

  /**
   * Toggles the menu visibility.
   *
   * @returns {void}
   */
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.isVisible = true;
  }

  /**
   * Closes the menu and updates visibility based on scroll position.
   *
   * @returns {void}
   */
  closeMenu() {
    this.menuOpen = false;
    this.isVisible = window.scrollY < window.innerHeight * 0.1;
  }

  /**
   * Updates the header visibility when the viewport is scrolled.
   *
   * @returns {void}
   */
  @HostListener('window:scroll')
  onScroll() {
    if (this.menuOpen) {
      this.isVisible = true;
      return;
    }

    this.isVisible = window.scrollY < window.innerHeight * 0.1;
  }
}
