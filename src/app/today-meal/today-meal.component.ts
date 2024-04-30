import { Component, Input } from '@angular/core';
import { Foods } from '../shared/interfaces/foods';
import { TodayMealListComponent } from './today-meal-list/today-meal-list.component';

@Component({
  selector: 'app-today-meal',
  standalone: true,
  imports: [TodayMealListComponent],
  templateUrl: './today-meal.component.html',
  styleUrl: './today-meal.component.scss'
})
export class TodayMealComponent {
  @Input() selectedFood!:Foods[];
  @Input() totalCalories!:number;
}
