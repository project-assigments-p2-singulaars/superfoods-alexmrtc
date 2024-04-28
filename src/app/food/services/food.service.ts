import { Injectable } from '@angular/core';
import foods from '../../../../foods';
import { Foods } from '../../shared/interfaces/foods';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }

  getAllFood(){
    return foods;
  }

  addNewFood(food: Foods){
    foods.push(food);
  }

  getLastId(){
    return foods.at(-1)!.id
  }
}
