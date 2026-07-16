import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HostListener } from '@angular/core';
import { SectionAnimationDirective } from '../shared/directives/section-animation';



@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionAnimationDirective],
  templateUrl: './my-work.html',
  styleUrls: ['./my-work.scss'],
})

export class MyWorkComponent {
scrollY = 0;
  Math = Math;

@HostListener('window:scroll')
onWindowScroll() {
  this.scrollY = window.scrollY;
}
getMyWorkOpacity(): number {
  return Math.max(
    Math.min((this.scrollY - 1300) / 400, 2.5),
    0
  );
}

getMyWorkTranslateY(): number {
    return Math.max(
        Math.min((this.scrollY - 1600) * 0.5, 250),
        0
    );
}
}
