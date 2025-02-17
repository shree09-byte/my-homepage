import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoAutomationComponent } from './seo-automation.component';

describe('SeoAutomationComponent', () => {
  let component: SeoAutomationComponent;
  let fixture: ComponentFixture<SeoAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeoAutomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
