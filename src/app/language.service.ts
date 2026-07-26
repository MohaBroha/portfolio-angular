import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type SupportedLang = 'de' | 'en';

/**
 * Manages the application's active language and persistence.
 */
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly storageKey = 'language';
  private readonly defaultLang: SupportedLang = 'en';

  /**
   * Creates a new language service instance.
   *
   * @param translate The translation service used to manage languages.
   */
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang(this.defaultLang);

    const saved =
      (localStorage.getItem(this.storageKey) as SupportedLang | null) || this.defaultLang;
    this.use(saved);
  }

  /**
   * Switches the active language and stores the selection.
   *
   * @param lang The language to activate.
   */
  use(lang: SupportedLang) {
    this.translate.use(lang);
    localStorage.setItem(this.storageKey, lang);
  }

  /**
   * Gets the currently active language.
   *
   * @returns {SupportedLang} The active language.
   */
  get currentLang(): SupportedLang {
    const current = this.translate.currentLang as SupportedLang | undefined;
    return current || this.defaultLang;
  }
}
