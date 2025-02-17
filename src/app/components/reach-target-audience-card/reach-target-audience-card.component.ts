import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reach-target-audience-card',
  imports: [],
  templateUrl: './reach-target-audience-card.component.html',
  styleUrl: './reach-target-audience-card.component.css',
})
export class ReachTargetAudienceCardComponent {
  @Input() title: string = 'Reach Target Audience';
  @Input() description: string =
    'Pinpoint the perfect audience with precision. Our AI-driven targeting ensures every message resonates where it matters most.';
  @Input() groupImage: string =
    'https://dashboard.codeparrot.ai/api/image/Z7Cls49nxTWt8i68/group-12.png';
  @Input() componentImage: string =
    'https://dashboard.codeparrot.ai/api/image/Z7Cls49nxTWt8i68/componen.png';
}
