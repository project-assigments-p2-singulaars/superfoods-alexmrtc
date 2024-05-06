import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Foods } from '../../../shared/interfaces/foods';
import { FoodService } from '../../services/food.service';
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
  @Input() food!:Foods[];
  @Input() searchText!:string;
  @Output() todayDishSent = new EventEmitter();


  addToMeal(dish: Foods){
    const selectedDish = {...dish, quantity: dish.quantity}
    this.todayDishSent.emit(selectedDish)
  }

}
