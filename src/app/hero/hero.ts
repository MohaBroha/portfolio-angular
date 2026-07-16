import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})
export class HeroComponent {

scrollY = 0;
@HostListener('window:scroll')
onWindowScroll() {
  this.scrollY = window.scrollY;
}
}