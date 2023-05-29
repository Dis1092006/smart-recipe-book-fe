import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../ingredient.model';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.css']
})
export class IngredientEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', { static: false }) ingredientForm!: NgForm;

  ingredientStartEditingSubcription!: Subscription;
  currentIngredientIndex: number = -1;
  currentIngredient!: Ingredient;
  isEditing = false;

  constructor(private ingredientService: IngredientService) {
  }

  ngOnInit(): void {
    this.ingredientStartEditingSubcription = this.ingredientService.ingredientStartEditing.subscribe(
      (index: number) => {
        this.currentIngredientIndex = index;
        this.currentIngredient = this.ingredientService.getIngredientByIndex(index);
        this.ingredientForm.setValue({
          name: this.currentIngredient.name,
          amount: this.currentIngredient.amount,
          measuringUnit: this.currentIngredient.measuringUnit
        });
        this.isEditing = true;
      }
    );
  }

  onSubmitChanges(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount, value.measuringUnit);
    if (this.isEditing) {
      this.ingredientService.updateIngredientByIndex(this.currentIngredientIndex, newIngredient);
      this.isEditing = false;
    } else
      this.ingredientService.addIngredient(newIngredient);
    form.reset();
  }

  onDelete() {
    this.ingredientService.deleteIngredientByIndex(this.currentIngredientIndex);
    this.onClear();
  }

  onClear() {
    this.ingredientForm.reset();
    this.isEditing = false;
    this.ingredientService.ingredientsResetEditing.next();
  }

  ngOnDestroy(): void {
    this.ingredientStartEditingSubcription.unsubscribe();
  }
}
