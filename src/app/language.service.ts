import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type SupportedLang = 'de' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly storageKey = 'language';
  private readonly defaultLang: SupportedLang = 'en';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang(this.defaultLang);

    const saved =
      (localStorage.getItem(this.storageKey) as SupportedLang | null) || this.defaultLang;
    this.use(saved);
  }

  use(lang: SupportedLang) {
    this.translate.use(lang);
    localStorage.setItem(this.storageKey, lang);
  }

  get currentLang(): SupportedLang {
    const current = this.translate.currentLang as SupportedLang | undefined;
    return current || this.defaultLang;
  }
}
