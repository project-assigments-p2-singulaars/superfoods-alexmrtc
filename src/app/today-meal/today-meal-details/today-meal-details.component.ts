import { Component, Input } from '@angular/core';
import { Foods } from '../../shared/interfaces/foods';

@Component({
  selector: 'app-today-meal-details',
  standalone: true,
  imports: [],
  templateUrl: './today-meal-details.component.html',
  styleUrl: './today-meal-details.component.scss'
})
export class TodayMealDetailsComponent {
  @Input() todayFood!:Foods;

}
