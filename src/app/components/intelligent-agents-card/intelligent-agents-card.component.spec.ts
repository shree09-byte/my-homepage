import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelligentAgentsCardComponent } from './intelligent-agents-card.component';

describe('IntelligentAgentsCardComponent', () => {
  let component: IntelligentAgentsCardComponent;
  let fixture: ComponentFixture<IntelligentAgentsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntelligentAgentsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntelligentAgentsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
