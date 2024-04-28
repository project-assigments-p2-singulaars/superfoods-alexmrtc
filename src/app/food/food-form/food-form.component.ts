import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Foods } from '../../shared/interfaces/foods';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './food-form.component.html',
  styleUrl: './food-form.component.scss'
})
export class FoodFormComponent implements OnInit {
  isShown = false;

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
    const food: Foods = {
      id: this.foodService.getLastId() + 1,
      name: foodForm.controls['foodName'].value,
      calories: foodForm.controls['foodCalories'].value,
      image: foodForm.controls['foodImageUrl'].value,
      quantity: 0
    }
    console.log(food)
    foodForm.resetForm();

    this.reverseFormDisplay();
  }
}
