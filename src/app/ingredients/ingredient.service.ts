import { Ingredient } from './ingredient.model';
import { EventEmitter } from '@angular/core';

export class IngredientService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5, 'ea'),
    new Ingredient('Tomatoes', 10, 'ea'),
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
