import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HostListener } from '@angular/core';
import { SectionAnimationDirective } from '../shared/directives/section-animation';

/**
 * My work section component.
 */
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

  /**
   * Updates the component's scroll offset.
   *
   * @returns {void}
   */
  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrollY = window.scrollY;
  }

  /**
   * Calculates the opacity for the work section based on scroll position.
   *
   * @returns {number} The computed opacity value.
   */
  getMyWorkOpacity(): number {
    return Math.max(Math.min((this.scrollY - 1300) / 400, 2.5), 0);
  }

  /**
   * Calculates the vertical translation for the work section based on scroll position.
   *
   * @returns {number} The computed translate value.
   */
  getMyWorkTranslateY(): number {
    return Math.max(Math.min((this.scrollY - 1600) * 0.5, 250), 0);
  }
}
