import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-teamplayer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './teamplayer.html',
  styleUrls: ['./teamplayer.scss'],
})
export class TeamplayerComponent {}
