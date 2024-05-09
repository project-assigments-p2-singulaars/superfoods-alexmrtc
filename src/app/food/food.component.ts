import { Component, EventEmitter, Output } from '@angular/core';
import { FoodFormComponent } from './components/food-form/food-form.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { Food } from '../shared/interfaces/food';
import { FoodService } from './services/food.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [FormsModule, FoodFormComponent, FoodListComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  @Output() todayMealSent = new EventEmitter();

  searchText!:string;
  food!:Food[];

  constructor(private foodsService: FoodService){}

  ngOnInit(): void {
    this.food = this.foodsService.getAllFood();
  }

  sendToTodayMeal(food: Food){
    this.todayMealSent.emit(food);
  }

  registerFood(food: Food){
    this.foodsService.addNewFood(food);
  }
}
