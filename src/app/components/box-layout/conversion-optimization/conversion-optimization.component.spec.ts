import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionOptimizationComponent } from './conversion-optimization.component';

describe('ConversionOptimizationComponent', () => {
  let component: ConversionOptimizationComponent;
  let fixture: ComponentFixture<ConversionOptimizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversionOptimizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversionOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
