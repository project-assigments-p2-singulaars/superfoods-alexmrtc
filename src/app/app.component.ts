import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodListComponent } from './food/food-list/food-list.component';
import { TodayMealComponent } from './today-meal/today-meal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FoodListComponent, TodayMealComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'superfoods';
}
