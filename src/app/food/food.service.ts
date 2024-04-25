import { Injectable } from '@angular/core';
import foods from '../../../foods';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }

  getAllFood(){
    return foods;
  }
}
