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
}
