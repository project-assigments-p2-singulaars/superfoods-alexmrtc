import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodayMealComponent } from './today-meal/today-meal.component';
import { FoodComponent } from './food/food.component';
import { Foods } from './shared/interfaces/foods';
import { FoodService } from './food/services/food.service';

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
  selectedFood: Foods[] = [];

  constructor (private foodService: FoodService){}

  addToTodayMeal (dish: Foods) {
    this.foodService.setNewFoodForToday(this.selectedFood, dish);

    console.log(this.selectedFood)
    this.totalCalories = this.foodService.calculateTotalCalories(this.selectedFood)
  }

}
