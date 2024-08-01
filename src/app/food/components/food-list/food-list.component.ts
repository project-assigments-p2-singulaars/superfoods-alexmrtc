import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Food } from '../../../shared/interfaces/food';
import { FoodService } from '../../../shared/services/food.service';
import { FoodFilterPipe } from '../../pipes/food-filter.pipe';
import { FormsModule } from '@angular/forms';
import { FoodFormComponent } from '../food-form/food-form.component';
import { FoodDetailsComponent } from '../food-details/food-details.component';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodFilterPipe, FormsModule, FoodFormComponent, FoodDetailsComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent{
  private foodService = inject(FoodService);
  @Input() food!:Food[];
  // @Input() searchText!:string;

  searchText = this.foodService.searchText;
  @Output() todayDishSent = new EventEmitter();


  addToMeal(dish: Food){
    const selectedDish = {...dish, quantity: dish.quantity}
    this.todayDishSent.emit(selectedDish)
  }

}
