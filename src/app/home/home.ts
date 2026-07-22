import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from '../hero/hero';
import { AboutComponent } from '../about/about';
import { SkillSetComponent } from '../skill-set/skill-set';
import { MyWorkComponent } from '../my-work/my-work';
import { TeamplayerComponent } from '../teamplayer/teamplayer';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    SkillSetComponent,
    MyWorkComponent,
    TeamplayerComponent,
    ContactComponent,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent {}
