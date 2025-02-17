import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignAutomationComponent } from './campaign-automation.component';

describe('CampaignAutomationComponent', () => {
  let component: CampaignAutomationComponent;
  let fixture: ComponentFixture<CampaignAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignAutomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
