import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayMealListComponent } from './today-meal-list.component';

describe('TodayMealListComponent', () => {
  let component: TodayMealListComponent;
  let fixture: ComponentFixture<TodayMealListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayMealListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodayMealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
