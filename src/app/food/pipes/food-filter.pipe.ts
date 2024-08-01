import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../../shared/interfaces/food';

@Pipe({
  name: 'foodFilter',
  standalone: true
})
export class FoodFilterPipe implements PipeTransform {
  transform(foods: Food[], searchText: string): Food[] {
    if (!foods) return [];

    if (!searchText) return foods;

    return foods.filter((food) => {
      const parsedName = food.name.toLowerCase().trim();

      return parsedName.includes(searchText.toLowerCase().trim())
    });
  }

}
