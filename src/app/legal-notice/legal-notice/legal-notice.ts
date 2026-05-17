import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [RouterModule], // Router für routerLink im HTML
  templateUrl: './legal-notice.html',
  styleUrls: ['./legal-notice.scss']
})
export class LegalNoticeComponent { }
