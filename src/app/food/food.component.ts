import { Component, EventEmitter, Output } from '@angular/core';
import { FoodFormComponent } from './components/food-form/food-form.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { Foods } from '../shared/interfaces/foods';
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
  food!:Foods[];

  constructor(private foodsService: FoodService){}

  ngOnInit(): void {
    this.food = this.foodsService.getAllFood();
  }

  sendToTodayMeal(food: Foods){
    console.log(food)
    this.todayMealSent.emit(food);
  }

  registerFood(food: Foods){
    this.foodsService.addNewFood(food);
  }
}