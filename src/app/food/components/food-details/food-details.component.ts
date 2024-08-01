import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Food } from '../../../shared/interfaces/food';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-food-details',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule],
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
