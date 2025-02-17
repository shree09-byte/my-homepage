import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-media-marketing',
  imports: [],
  templateUrl: './social-media-marketing.component.html',
  styleUrl: './social-media-marketing.component.css',
})
export class SocialMediaMarketingComponent {
  @Input() networkIcon: string =
    'https://dashboard.codeparrot.ai/api/image/Z7Dph49nxTWt8i8E/gis-netw.png';
  @Input() title: string = 'Social Media Marketing';
  @Input() description: string =
    'AI agents craft personalized content, schedule posts, monitor engagement, and refine strategies in real time for maximum impact across all major social platforms.';
}
