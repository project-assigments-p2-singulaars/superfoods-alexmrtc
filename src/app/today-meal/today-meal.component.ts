import { Component, Input, computed, inject } from '@angular/core';
import { Food } from '../shared/interfaces/food';
import { TodayMealListComponent } from './today-meal-list/today-meal-list.component';
import { MenuService } from '../shared/services/menu.service';

@Component({
  selector: 'app-today-meal',
  standalone: true,
  imports: [TodayMealListComponent],
  templateUrl: './today-meal.component.html',
  styleUrl: './today-meal.component.scss'
})
export class TodayMealComponent {
  private menuService = inject(MenuService);
  menu = this.menuService.menu;

  @Input() selectedFood!:Food[];

  totalCalories = computed(() => this.menu().reduce((accumulator, currentValue) => accumulator + (currentValue.calories * currentValue.quantity), 0))
}
