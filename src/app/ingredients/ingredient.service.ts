import { Subject } from 'rxjs';
import { Ingredient } from './ingredient.model';

export class IngredientService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5, 'ea'),
    new Ingredient('Tomatoes', 10, 'ea'),
  ];

  ingredientsChanged = new Subject<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
