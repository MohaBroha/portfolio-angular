import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header';
import { HeroComponent } from './hero/hero';
import { AboutComponent } from './about/about';
import { SkillSetComponent } from './skill-set/skill-set';
import { MyWorkComponent } from './my-work/my-work';
import { TeamplayerComponent } from './teamplayer/teamplayer';
import { ContactComponent } from './contact/contact';
import { FooterComponent } from './footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillSetComponent,
    MyWorkComponent,
    TeamplayerComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent { }
