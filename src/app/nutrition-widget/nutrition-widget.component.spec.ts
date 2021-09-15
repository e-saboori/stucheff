import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionWidgetComponent } from './nutrition-widget.component';

describe('NutritionWidgetComponent', () => {
  let component: NutritionWidgetComponent;
  let fixture: ComponentFixture<NutritionWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
