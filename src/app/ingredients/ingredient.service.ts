import { Subject } from 'rxjs';
import { Ingredient } from './ingredient.model';

export class IngredientService {
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientStartEditing = new Subject<number>();
  ingredientsResetEditing = new Subject<void>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5, 'ea'),
    new Ingredient('Tomatoes', 10, 'ea'),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredientByIndex(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredientByIndex(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredientByIndex(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
