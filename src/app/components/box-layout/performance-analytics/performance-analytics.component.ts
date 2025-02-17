import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-performance-analytics',
  imports: [],
  templateUrl: './performance-analytics.component.html',
  styleUrl: './performance-analytics.component.css',
})
export class PerformanceAnalyticsComponent {
  @Input() iconSrc: string =
    'https://dashboard.codeparrot.ai/api/image/Z7Dph49nxTWt8i8E/eos-icon.png';
  @Input() title: string = 'Performance Analytics';
  @Input() description: string =
    'Access real-time insights and track key metrics across all campaigns in one unified dashboard to quickly refine your strategies.';
}
