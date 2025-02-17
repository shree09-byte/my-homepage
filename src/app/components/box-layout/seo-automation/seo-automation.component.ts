import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seo-automation',
  imports: [],
  templateUrl: './seo-automation.component.html',
  styleUrl: './seo-automation.component.css',
})
export class SeoAutomationComponent {
  @Input() title: string = 'SEO Automation';
  @Input() description: string =
    'Automate keyword research and content optimization suggestions to improve your search engine rankings with less effort.';
  @Input() iconSrc: string =
    'https://dashboard.codeparrot.ai/api/image/Z7Dph49nxTWt8i8E/icon-par.png';
}
