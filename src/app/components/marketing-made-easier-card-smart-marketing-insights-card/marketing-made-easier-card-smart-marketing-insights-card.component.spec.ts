import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingMadeEasierCardSmartMarketingInsightsCardComponent } from './marketing-made-easier-card-smart-marketing-insights-card.component';

describe('MarketingMadeEasierCardSmartMarketingInsightsCardComponent', () => {
  let component: MarketingMadeEasierCardSmartMarketingInsightsCardComponent;
  let fixture: ComponentFixture<MarketingMadeEasierCardSmartMarketingInsightsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingMadeEasierCardSmartMarketingInsightsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingMadeEasierCardSmartMarketingInsightsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
