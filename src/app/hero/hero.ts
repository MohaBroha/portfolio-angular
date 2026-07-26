import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

/**
 * Hero section component with animated introductory text.
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})
export class HeroComponent implements OnInit {
  /**
   * Creates a new hero component instance.
   *
   * @param translate The translation service used to load localized content.
   */
  constructor(private translate: TranslateService) {}

  intro = '';
  name = '';
  roleTop = '';
  roleBottom = '';

  private textIntro = '';
  private textName = '';
  private textRoleTop = '';
  private textRoleBottom = '';

  /**
   * Initializes the hero component and subscribes to language changes.
   *
   * @returns {void}
   */
  ngOnInit(): void {
    this.loadTranslations();

    this.translate.onLangChange.subscribe(() => {
      this.resetTyping();
      this.loadTranslations();
    });
  }

  /**
   * Loads the localized hero text values.
   *
   * @returns {void}
   */
  loadTranslations(): void {
    this.translate
      .get(['hero.intro', 'hero.name', 'hero.roleTop', 'hero.roleBottom'])
      .subscribe((translations) => {
        this.textIntro = translations['hero.intro'];
        this.textName = translations['hero.name'];
        this.textRoleTop = translations['hero.roleTop'];
        this.textRoleBottom = translations['hero.roleBottom'];

        this.startTyping();
      });
  }

  /**
   * Clears the currently displayed typing output.
   *
   * @returns {void}
   */
  resetTyping(): void {
    this.intro = '';
    this.name = '';
    this.roleTop = '';
    this.roleBottom = '';
  }

  /**
   * Animates the hero text by typing each translation sequentially.
   *
   * @returns {Promise<void>}
   */
  async startTyping() {
    await this.typeText(this.textIntro, (value) => (this.intro = value));

    await this.typeText(this.textName, (value) => (this.name = value));

    await this.typeText(this.textRoleTop, (value) => (this.roleTop = value));

    await this.typeText(this.textRoleBottom, (value) => (this.roleBottom = value));
  }

  /**
   * Types a text string character by character.
   *
   * @param text The text to display.
   * @param update A callback that receives each updated character sequence.
   * @returns {Promise<void>} A promise that resolves when typing is complete.
   */
  typeText(text: string, update: (value: string) => void): Promise<void> {
    return new Promise((resolve) => {
      let index = 0;

      const timer = setInterval(() => {
        update(text.substring(0, index + 1));

        index++;

        if (index >= text.length) {
          clearInterval(timer);
          resolve();
        }
      }, 70);
    });
  }

  scrollY = 0;
  /**
   * Updates the scroll position for the hero section.
   *
   * @returns {void}
   */
  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrollY = window.scrollY;
  }
}
