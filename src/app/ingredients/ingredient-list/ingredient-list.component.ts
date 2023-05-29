import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../ingredient.model';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  selectedIngredientIndex: number = -1;

  private ingredientsChangedSubscription!: Subscription;
  private ingredientsResetEditingSubscription!: Subscription;

  constructor(private ingredientService: IngredientService) {
  }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
    this.ingredientsChangedSubscription = this.ingredientService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        this.selectedIngredientIndex = -1;
      }
    );
    this.ingredientsResetEditingSubscription = this.ingredientService.ingredientsResetEditing.subscribe(
      () => {
        this.selectedIngredientIndex = -1;
      }
    );
  }

  onEditItem(index: number) {
    this.ingredientService.ingredientStartEditing.next(index);
    this.selectedIngredientIndex = index;
  }

  ngOnDestroy(): void {
    this.ingredientsChangedSubscription.unsubscribe();
    this.ingredientsResetEditingSubscription.unsubscribe();
  }
}
