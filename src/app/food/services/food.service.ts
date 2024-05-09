import { Injectable } from '@angular/core';
import foods from '../../../../foods';
import { Food } from '../../shared/interfaces/food';

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

  checkTodayMeal(food:Food[], id:number){
    return food.some((foodElement) => foodElement.id === id);
  }

  setNewFoodForToday(todayMeals: Food[], dish: Food) {
    const isAlreadyAdded = this.checkTodayMeal(todayMeals, dish.id);

    if(isAlreadyAdded){
      console.log(typeof(todayMeals[dish.id -1].quantity))
      console.log(typeof(dish.quantity))
      todayMeals[dish.id -1].quantity += dish.quantity;
    }else {
      todayMeals.push(dish)
    }
  }

  calculateTotalCalories(food:Food[]) {
    let totalCalories = 0;

    food.map((dish) => totalCalories += (dish.calories * dish.quantity));

    return totalCalories;
  }
}
