import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Food } from '../../../shared/interfaces/food';

@Component({
  selector: 'app-food-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.scss'
})
export class FoodDetailsComponent {
  @Input() foodElement!:Food;
  @Output() sendDish = new EventEmitter();

  foodQuantity=1;

  quantity:number = 1;

  addDishToMeal(dish: Food){
    const selectedDish = {...dish, quantity: this.foodQuantity}
    this.sendDish.emit(selectedDish)
  }
}
