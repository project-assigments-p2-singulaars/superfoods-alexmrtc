import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodayMealComponent } from './today-meal/today-meal.component';
import { FoodComponent } from './food/food.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FoodComponent, TodayMealComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'superfoods';
}
