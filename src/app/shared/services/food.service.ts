import { Injectable } from '@angular/core';
import foods from '../../../../foods';
import { Food } from '../interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }

  getAllFood(){
    return foods;
  }

  addNewFood(food: Food){
    foods.push(food);
  }

  getLastId(){
    return foods.at(-1)!.id
  }

  calculateTotalCalories(food:Food[]) {
    let totalCalories = 0;

    const foodCalories:number[] = [];

    // food.map((dish) => foodCalories.push(dish.calories * dish.quantity)
    // )

    // totalCalories = foodCalories.reduce((accumulator, currentValue) => 
    //   accumulator + currentValue, totalCalories
    // );

    totalCalories = food.reduce((accumulator, currentValue) => accumulator + (currentValue.calories * currentValue.quantity), totalCalories);
    return totalCalories;
  }
}
