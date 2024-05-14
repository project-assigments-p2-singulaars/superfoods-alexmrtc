import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodayMealComponent } from './today-meal/today-meal.component';
import { FoodComponent } from './food/food.component';
import { Food } from './shared/interfaces/food';
import { FoodService } from './shared/services/food.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FoodComponent, TodayMealComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'superfoods';
  totalCalories= 0;
  selectedFood: Food[] = [];

  constructor (private foodService: FoodService){}
}
