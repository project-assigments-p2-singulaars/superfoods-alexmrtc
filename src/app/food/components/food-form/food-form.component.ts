import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Food } from '../../../shared/interfaces/food';
import { FoodService } from '../../../shared/services/food.service';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-food-form',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './food-form.component.html',
  styleUrl: './food-form.component.scss'
})
export class FoodFormComponent implements OnInit {
  isShown = false;
  @Output() formSent = new EventEmitter();

  constructor (private foodService: FoodService){}

  ngOnInit(): void {
    const formElement = document.getElementById("addFoodForm");
    formElement?.classList.add("hide");
  }

  reverseFormDisplay(){
    const formElement = document.getElementById("addFoodForm");
    if(this.isShown === true){
      formElement?.classList.add("hide");
    } else {
      formElement?.classList.remove("hide");
    }

    this.isShown = !this.isShown;
  }

  submit (foodForm: NgForm){
    const food: Food = {
      id: this.foodService.getLastId() + 1,
      name: foodForm.controls['foodName'].value,
      calories: foodForm.controls['foodCalories'].value,
      image: foodForm.controls['foodImageUrl'].value,
      quantity: 0
    }

    this.formSent.emit(food);
    foodForm.resetForm();

    this.reverseFormDisplay();
  }
}
