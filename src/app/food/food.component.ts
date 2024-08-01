import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FoodFormComponent } from './components/food-form/food-form.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { Food } from '../shared/interfaces/food';
import { FoodService } from '../shared/services/food.service';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../shared/services/menu.service';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [FormsModule, FoodFormComponent, FoodListComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  @Output() todayMealSent = new EventEmitter();
  private menuService = inject(MenuService);

  searchText!:string;
  food!:Food[];

  constructor(private foodsService: FoodService){}

  ngOnInit(): void {
    this.food = this.foodsService.getAllFood();
  }

  sendToTodayMeal(food: Food){
    this.menuService.addToMenu(food);
  }

  registerFood(food: Food){
    this.foodsService.addNewFood(food);
  }
}
