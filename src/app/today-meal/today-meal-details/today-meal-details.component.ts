import { Component, Input } from '@angular/core';
import { Food } from '../../shared/interfaces/food';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-today-meal-details',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './today-meal-details.component.html',
  styleUrl: './today-meal-details.component.scss'
})
export class TodayMealDetailsComponent {
  @Input() todayFood!:Food;

}
