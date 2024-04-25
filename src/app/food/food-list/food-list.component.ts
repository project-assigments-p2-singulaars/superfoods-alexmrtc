import { Component, OnInit } from '@angular/core';
import { Foods } from '../../shared/interfaces/foods';
import { FoodService } from '../food.service';
import { FoodFilterPipe } from '../pipes/food-filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodFilterPipe, FormsModule],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent implements OnInit{
  food!:Foods[];
  searchText!:string

  constructor(private foodsService: FoodService){}

  ngOnInit(): void {
    this.food = this.foodsService.getAllFood();
  }
}
