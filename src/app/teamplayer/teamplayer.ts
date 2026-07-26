import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionAnimationDirective } from '../shared/directives/section-animation';

/**
 * Team player section component.
 */
@Component({
  selector: 'app-teamplayer',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionAnimationDirective],
  templateUrl: './teamplayer.html',
  styleUrls: ['./teamplayer.scss'],
})
export class TeamplayerComponent {}
