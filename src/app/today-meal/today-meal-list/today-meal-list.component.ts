import { Component, Input } from '@angular/core';
import { Foods } from '../../shared/interfaces/foods';
import { TodayMealDetailsComponent } from '../today-meal-details/today-meal-details.component';

@Component({
  selector: 'app-today-meal-list',
  standalone: true,
  imports: [TodayMealDetailsComponent],
  templateUrl: './today-meal-list.component.html',
  styleUrl: './today-meal-list.component.scss'
})
export class TodayMealListComponent {
  @Input() selectedFood!:Foods[];


}
