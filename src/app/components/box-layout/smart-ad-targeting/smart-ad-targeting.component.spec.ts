import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartAdTargetingComponent } from './smart-ad-targeting.component';

describe('SmartAdTargetingComponent', () => {
  let component: SmartAdTargetingComponent;
  let fixture: ComponentFixture<SmartAdTargetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartAdTargetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartAdTargetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
