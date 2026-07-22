import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  OnInit
} from '@angular/core';

import {
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})

export class HeroComponent implements OnInit {

  constructor(
    private translate: TranslateService
  ) {}

  intro = '';
  name = '';
  roleTop = '';
  roleBottom = '';

  private textIntro = '';
  private textName = '';
  private textRoleTop = '';
  private textRoleBottom = '';

ngOnInit(): void {
  this.loadTranslations();

  this.translate.onLangChange.subscribe(() => {
    this.resetTyping();
    this.loadTranslations();
  });
}

loadTranslations(): void {
  this.translate.get([
    'hero.intro',
    'hero.name',
    'hero.roleTop',
    'hero.roleBottom'
  ]).subscribe(translations => {

    this.textIntro = translations['hero.intro'];
    this.textName = translations['hero.name'];
    this.textRoleTop = translations['hero.roleTop'];
    this.textRoleBottom = translations['hero.roleBottom'];

    this.startTyping();
  });
}

resetTyping(): void {
  this.intro = '';
  this.name = '';
  this.roleTop = '';
  this.roleBottom = '';
}

async startTyping() {

  await this.typeText(
    this.textIntro,
    value => this.intro = value
  );

  await this.typeText(
    this.textName,
    value => this.name = value
  );

  await this.typeText(
    this.textRoleTop,
    value => this.roleTop = value
  );

  await this.typeText(
    this.textRoleBottom,
    value => this.roleBottom = value
  );

}

typeText(
  text: string,
  update: (value: string) => void
): Promise<void> {

  return new Promise(resolve => {

    let index = 0;

    const timer = setInterval(() => {

      update(text.substring(0, index + 1));

      index++;

      if (index >= text.length) {
        clearInterval(timer);
        resolve();
      }

    }, 100);

  });
}

scrollY = 0;
@HostListener('window:scroll')
onWindowScroll() {
  this.scrollY = window.scrollY;
}
}