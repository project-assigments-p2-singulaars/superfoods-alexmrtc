import { Component, Injector, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FoodService } from '../shared/services/food.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private foodService = inject(FoodService);

  searchText = this.foodService.searchText;
}
