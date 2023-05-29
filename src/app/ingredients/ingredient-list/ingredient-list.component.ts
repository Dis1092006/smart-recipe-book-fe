import { Component } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent {
  ingredients: Ingredient[] = [];

  constructor(private ingredientService: IngredientService) {
  }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
    this.ingredientService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
