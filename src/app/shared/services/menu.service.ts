import { Injectable, signal } from '@angular/core';
import { Food } from '../interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu = signal<Food[]>([]);

  checkTodayMeal(food:Food[], id:number){
    return this.menu().some((foodElement) => foodElement.id === id);
  }

  addToMenu(food: Food) {
    const isAlreadyAdded = this.checkTodayMeal(this.menu(), food.id);

    if(isAlreadyAdded){
      const newFoodsArray = this.menu().map((dish) => { 
        if(dish.id === food.id){
          console.log(food.quantity)
          dish.quantity += food.quantity;
        }

        return dish;
      })

      this.menu.set(newFoodsArray);
    } else {
      this.menu.update((dish) => [food].concat(dish));
    }

    console.log(this.menu())
  }
}
