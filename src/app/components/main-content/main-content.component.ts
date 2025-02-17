import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MarketingMadeEasierCardSmartMarketingInsightsCardComponent } from '../marketing-made-easier-card-smart-marketing-insights-card/marketing-made-easier-card-smart-marketing-insights-card.component';
import { ReachTargetAudienceCardComponent } from '../reach-target-audience-card/reach-target-audience-card.component';
import { IntelligentAgentsCardComponent } from '../intelligent-agents-card/intelligent-agents-card.component';
import { SmartAdTargetingComponent } from '../box-layout/smart-ad-targeting/smart-ad-targeting.component';
import { SeoAutomationComponent } from '../box-layout/seo-automation/seo-automation.component';
import { SocialMediaMarketingComponent } from '../box-layout/social-media-marketing/social-media-marketing.component';
import { PerformanceAnalyticsComponent } from '../box-layout/performance-analytics/performance-analytics.component';
import { CampaignAutomationComponent } from '../box-layout/campaign-automation/campaign-automation.component';
import { ConversionOptimizationComponent } from '../box-layout/conversion-optimization/conversion-optimization.component';
import { ContactUsComponent } from '../box-layout/contact-us/contact-us.component';
import { FooterComponent } from '../footer/footer.component';

interface LogoItem {
  name: string;
  imageUrl: string;
  width: number;
  height: number;
  marginTop?: number;
}

interface SocialIcon {
  image: string;
  label: string;
  overlayImage?: string;
}

interface Testimonial {
  quote: string;
  author: string;
}

@Component({
  selector: 'app-main-content',
  imports: [
    CommonModule,
    MarketingMadeEasierCardSmartMarketingInsightsCardComponent,
    ReachTargetAudienceCardComponent,
    IntelligentAgentsCardComponent,
    SmartAdTargetingComponent,
    SeoAutomationComponent,
    SocialMediaMarketingComponent,
    PerformanceAnalyticsComponent,
    CampaignAutomationComponent,
    ConversionOptimizationComponent,
    ContactUsComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {
  @Input() widthy: number = 970;
  @Input() heighty: number = 582;

  logoImage: string =
    'https://dashboard.codeparrot.ai/api/image/Z7NglKWN819FoZh2/ad-task-a.png';
  youtubeIcon: string =
    'https://dashboard.codeparrot.ai/api/image/Z7NglKWN819FoZh2/logos-yo.png';

  get containerStyle() {
    return {
      width: `${this.widthy}px`,
      height: `${this.heighty}px`,
      'background-color': '#000000',
      'border-radius': '32px',
      padding: '20px',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
    };
  }

  get logoStyle() {
    return {
      width: '468.21px',
      height: '93.83px',
      'margin-bottom': '20px',
    };
  }

  get youtubeStyle() {
    return {
      width: '96px',
      height: '67px',
    };
  }

  playVideo() {
    // Handle video play functionality
    console.log('Play video clicked');
  }

  cards = [
    {
      title: 'Marketing Made Easier',
      description:
        'Leverage AI to streamline your marketing efforts effortlessly.',
      icon: 'https://dashboard.codeparrot.ai/api/image/Z7Cls49nxTWt8i68/frame-13.png',
      aiBadge: true,
    },
    {
      title: 'Smart Marketing Insights',
      description: 'Analyze and optimize campaigns with AI-driven insights.',
      icon: 'https://dashboard.codeparrot.ai/api/image/Z7Cls49nxTWt8i68/frame-13-2.png',
      pieChart:
        'https://dashboard.codeparrot.ai/api/image/Z7Cls49nxTWt8i68/tabler-c.png',
    },
  ];

  logoUrlNew: string =
    'https://dashboard.codeparrot.ai/api/image/Z7GhRuepongUSRp4/ad-task-a.png';
  opacity: number = 1;

  onHoveradTask(): void {
    this.opacity = 0.8;
  }

  onHoverOut(): void {
    this.opacity = 1;
  }

  logoUrl: string =
    'https://dashboard.codeparrot.ai/api/image/Z7CHJuepongUSRmW/ad-task-a.png';
  width: number = 468;
  height: number = 95.96;
  @Input() width1: number = 185;
  @Input() height1: number = 48;
  @Input() buttonText: string = 'Start Free Trail';
  @Input() buttonText2: string = 'Contact Us';

  logos: LogoItem[] = [
    {
      name: 'Workday',
      imageUrl:
        'https://dashboard.codeparrot.ai/api/image/Z7CR149nxTWt8i6V/workday.png',
      width: 68,
      height: 68,
      marginTop: 11,
    },
    {
      name: 'Google',
      imageUrl:
        'https://dashboard.codeparrot.ai/api/image/Z7CR149nxTWt8i6V/google.png',
      width: 90,
      height: 90,
    },
    {
      name: 'Salesforce',
      imageUrl:
        'https://dashboard.codeparrot.ai/api/image/Z7CR149nxTWt8i6V/salesfor.png',
      width: 90,
      height: 90,
    },
    {
      name: 'Amazon',
      imageUrl:
        'https://dashboard.codeparrot.ai/api/image/Z7CR149nxTWt8i6V/amazon.png',
      width: 90,
      height: 45.49,
      marginTop: 22.25,
    },
    {
      name: 'Sony',
      imageUrl:
        'https://dashboard.codeparrot.ai/api/image/Z7CR149nxTWt8i6V/sony.png',
      width: 90,
      height: 90,
    },
    {
      name: 'Cocacola',
      imageUrl:
        'https://dashboard.codeparrot.ai/api/image/Z7CR149nxTWt8i6V/cocacola.png',
      width: 90,
      height: 28.64,
      marginTop: 30.68,
    },
    {
      name: 'Intel',
      imageUrl:
        'https://dashboard.codeparrot.ai/api/image/Z7CR149nxTWt8i6V/intel.png',
      width: 90,
      height: 60,
      marginTop: 15,
    },
    // Duplicate set with -2 suffix images for continuous scroll
    {
      name: 'Workday',
      imageUrl:
        'https://dashboard.codeparrot.ai/api/image/Z7CR149nxTWt8i6V/workday-2.png',
      width: 68,
      height: 68,
      marginTop: 11,
    },
    {
      name: 'Google',
      imageUrl:
        'https://dashboard.codeparrot.ai/api/image/Z7CR149nxTWt8i6V/google-2.png',
      width: 90,
      height: 90,
    },
    {
      name: 'Salesforce',
      imageUrl:
        'https://dashboard.codeparrot.ai/api/image/Z7CR149nxTWt8i6V/salesfor-2.png',
      width: 90,
      height: 90,
    },
    {
      name: 'Amazon',
      imageUrl:
        'https://dashboard.codeparrot.ai/api/image/Z7CR149nxTWt8i6V/amazon-2.png',
      width: 90,
      height: 45.49,
      marginTop: 22.26,
    },
    {
      name: 'Sony',
      imageUrl:
        'https://dashboard.codeparrot.ai/api/image/Z7CR149nxTWt8i6V/sony-2.png',
      width: 90,
      height: 90,
    },
    {
      name: 'Cocacola',
      imageUrl:
        'https://dashboard.codeparrot.ai/api/image/Z7CR149nxTWt8i6V/cocacola-2.png',
      width: 90,
      height: 28.64,
      marginTop: 30.68,
    },
    {
      name: 'Intel',
      imageUrl:
        'https://dashboard.codeparrot.ai/api/image/Z7CR149nxTWt8i6V/intel-2.png',
      width: 90,
      height: 60,
      marginTop: 15,
    },
  ];

  testimonials: Testimonial[] = [
    {
      quote:
        "We used to struggle with consistent branding across platforms. adTask's unified dashboard ensures our message stays on point every single time.",
      author: 'Brand Director at a Tech Startup',
    },
    {
      quote:
        'adTask turned our complicated campaigns into a breeze. The built-in AI agents helped us reach exactly the customers we wanted—without guesswork!',
      author: 'Head of Growth at Tech Startup',
    },
    {
      quote:
        "We've tried other platforms before, but none delivered the depth of insights adTask offers. Our conversion rates are up by 35% since we signed on!",
      author: 'Ecommerce Manager at Home Décor Brand',
    },
    {
      quote:
        "What impressed me most was the real-time optimization. adTask's intelligent agents just keep refining our campaigns—our ad spend has never worked harder!",
      author: 'Digital Strategist at SaaS Company',
    },
    {
      quote:
        'adTask made everything from campaign setup to performance tracking simple. Our team can now focus on creating great content rather than crunching numbers.',
      author: 'Social Media Lead at Non-Profit Organization',
    },
    {
      quote:
        "We've seen a 50% boost in engagement across our social channels since switching to adTask. Its AI-driven insights are game-changing!",
      author: 'Social Media Manager at a Fitness Brand',
    },
  ];

  @Input() onStartFreeClick: () => void = () =>
    console.log('Start Free Trial clicked');
  @Input() onScheduleClick: () => void = () =>
    console.log('Schedule a Call clicked');

  @Input() imageUrl: string =
    'https://dashboard.codeparrot.ai/api/image/Z7HT749nxTWt8i-M/mask-gro.png';

  @Input() socialIcons: SocialIcon[] = [
    {
      image:
        'https://dashboard.codeparrot.ai/api/image/Z7CUYo9nxTWt8i6a/frame-13.png',
      label: 'Google Ads',
    },
    {
      image:
        'https://dashboard.codeparrot.ai/api/image/Z7CUYo9nxTWt8i6a/ic-twoto.png',
      label: 'Tik Tok Ads',
      overlayImage:
        'https://dashboard.codeparrot.ai/api/image/Z7CUYo9nxTWt8i6a/ellipse.png',
    },
    {
      image:
        'https://dashboard.codeparrot.ai/api/image/Z7CUYo9nxTWt8i6a/ri-meta.png',
      label: 'Meta',
      overlayImage:
        'https://dashboard.codeparrot.ai/api/image/Z7CUYo9nxTWt8i6a/ellipse-2.png',
    },
    {
      image:
        'https://dashboard.codeparrot.ai/api/image/Z7CUYo9nxTWt8i6a/mdi-link.png',
      label: 'Linkedin Ads',
      overlayImage:
        'https://dashboard.codeparrot.ai/api/image/Z7CUYo9nxTWt8i6a/ellipse-3.png',
    },
    {
      image:
        'https://dashboard.codeparrot.ai/api/image/Z7CUYo9nxTWt8i6a/bi-amazo.png',
      label: 'Amazon Ads',
      overlayImage:
        'https://dashboard.codeparrot.ai/api/image/Z7CUYo9nxTWt8i6a/ellipse-4.png',
    },
    {
      image:
        'https://dashboard.codeparrot.ai/api/image/Z7CUYo9nxTWt8i6a/bi-twitt.png',
      label: 'X / Twitter',
      overlayImage:
        'https://dashboard.codeparrot.ai/api/image/Z7CUYo9nxTWt8i6a/ellipse-5.png',
    },
  ];

  @Input() text: string = 'features';
  @Input() backgroundColor: string = '#333333';
  @Input() borderRadius: string = '15px';
  @Input() border: string = '1px solid rgba(255, 255, 255, 0.05)';

  @Input() text1: string = 'Feature packed to make';
  @Input() text3: string = 'Innovative Services ';
  @Input() text4: string = 'for Growth.';
  @Input() text5: string = 'TESTINOMIALS';
  @Input() text6: string = 'Trusted by';
  @Input() text7: string = 'satisfied clients';
  @Input() text8: string = 'Discover how we’ve driven growth and innovation.';
  @Input() gap: number = 4;
  @Input() line1Image: string =
    'https://dashboard.codeparrot.ai/api/image/Z7CWbY9nxTWt8i6g/line-1.png';
  @Input() line2Image: string =
    'https://dashboard.codeparrot.ai/api/image/Z7CWbY9nxTWt8i6g/line-2.png';

  @Input() text2: string = 'SERVICES';

  backgroundColorButton: string =
    'linear-gradient(180deg, #4A4A4A 0%, #2C2C2C 100%)';
  isHovered: boolean = false;

  onHover(hover: boolean) {
    this.isHovered = hover;
  }

  constructor() {}

  ngOnInit(): void {}

  particle1: string =
    'https://dashboard.codeparrot.ai/api/image/Z7CLcI9nxTWt8i6C/particle.png';
  particle2: string =
    'https://dashboard.codeparrot.ai/api/image/Z7CLcI9nxTWt8i6C/particle-2.png';

  onClick() {
    // Handle click event
    console.log('Services button clicked');
  }

  onMouseEnter() {
    this.backgroundColorButton =
      'linear-gradient(180deg, #4A4A4A 0%, #2C2C2C 100%)';
  }

  onMouseLeave() {
    this.backgroundColorButton =
      'linear-gradient(180deg, #4A4A4A 0%, #2C2C2C 100%)';
  }
}
