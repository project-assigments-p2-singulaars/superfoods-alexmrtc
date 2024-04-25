import { Component, OnInit } from '@angular/core';
import { Foods } from '../../shared/interfaces/foods';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent implements OnInit{
  food!:Foods[]; 

  constructor(private foodsService: FoodService){}

  ngOnInit(): void {
    this.food = this.foodsService.getAllFood();
  }
}
