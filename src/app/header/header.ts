import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../language.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  menuOpen = false;
  isVisible = true;

  constructor(private languageService: LanguageService) {}

  get currentLang() {
    return this.languageService.currentLang;
  }

  switchLanguage(lang: 'de' | 'en') {
    this.languageService.use(lang);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.isVisible = true;
  }

  closeMenu() {
    this.menuOpen = false;
    this.isVisible = window.scrollY < window.innerHeight * 0.1;
  }

  @HostListener('window:scroll')
  onScroll() {
    if (this.menuOpen) {
      this.isVisible = true;
      return;
    }

    this.isVisible = window.scrollY < window.innerHeight * 0.1;
  }
}
