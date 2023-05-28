import { Component } from '@angular/core';
import { Ingredient } from "../ingredient.model";

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5, 'ea'),
    new Ingredient('Tomatoes', 10, 'ea'),
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
