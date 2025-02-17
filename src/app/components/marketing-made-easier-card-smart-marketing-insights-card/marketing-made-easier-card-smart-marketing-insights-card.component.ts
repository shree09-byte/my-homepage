import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-marketing-made-easier-card-smart-marketing-insights-card',
  imports: [],
  templateUrl:
    './marketing-made-easier-card-smart-marketing-insights-card.component.html',
  styleUrl:
    './marketing-made-easier-card-smart-marketing-insights-card.component.css',
})
export class MarketingMadeEasierCardSmartMarketingInsightsCardComponent {
  title1 = 'Marketing Made Easier';
  description1 =
    'Leverage AI to streamline your marketing efforts effortlessly.';
  icon1 =
    'https://dashboard.codeparrot.ai/api/image/Z7Cls49nxTWt8i68/frame-13.png';

  title2 = 'Smart Marketing Insights';
  description2 = 'Analyze and optimize campaigns with AI-driven insights.';
  icon2 =
    'https://dashboard.codeparrot.ai/api/image/Z7Cls49nxTWt8i68/frame-13-2.png';
  pieChart =
    'https://dashboard.codeparrot.ai/api/image/Z7Cls49nxTWt8i68/tabler-c.png';
}
