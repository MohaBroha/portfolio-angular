import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionAnimationDirective } from '../shared/directives/section-animation';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionAnimationDirective],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class AboutComponent {}
