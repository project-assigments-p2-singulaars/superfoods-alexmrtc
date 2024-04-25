import { Pipe, PipeTransform } from '@angular/core';
import { Foods } from '../../shared/interfaces/foods';

@Pipe({
  name: 'foodFilter',
  standalone: true
})
export class FoodFilterPipe implements PipeTransform {
  transform(foods: Foods[], searchText: string): Foods[] {
    if (!foods) return [];

    if (!searchText) return foods;

    return foods.filter((food) => food.name.includes(searchText));
  }

}
