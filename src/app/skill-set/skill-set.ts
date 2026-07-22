import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionAnimationDirective } from '../shared/directives/section-animation';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionAnimationDirective],
  templateUrl: './skill-set.html',
  styleUrls: ['./skill-set.scss'],
})
export class SkillSetComponent {}
