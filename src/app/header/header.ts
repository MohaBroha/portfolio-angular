import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  constructor(private languageService: LanguageService) {}

  get currentLang() {
    return this.languageService.currentLang;
  }

  switchLanguage(lang: 'de' | 'en') {
    this.languageService.use(lang);
  }
}
