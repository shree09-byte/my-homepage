import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachTargetAudienceCardComponent } from './reach-target-audience-card.component';

describe('ReachTargetAudienceCardComponent', () => {
  let component: ReachTargetAudienceCardComponent;
  let fixture: ComponentFixture<ReachTargetAudienceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReachTargetAudienceCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachTargetAudienceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
