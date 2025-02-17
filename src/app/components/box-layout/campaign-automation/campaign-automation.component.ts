import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campaign-automation',
  imports: [],
  templateUrl: './campaign-automation.component.html',
  styleUrl: './campaign-automation.component.css',
})
export class CampaignAutomationComponent {
  @Input() iconSrc: string =
    'https://dashboard.codeparrot.ai/api/image/Z7Dph49nxTWt8i8E/ic-round.png';
  @Input() title: string = 'Campaign Automation';
  @Input() description: string =
    'Centralize and streamline your ad management. Our intelligent engine automatically adjusts bids, budgets, and targeting to maximize results.';
}
