import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './legal-notice.html',
  styleUrls: ['./legal-notice.scss'],
})
export class LegalNoticeComponent {}
