import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.css']
})
export class IngredientEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef!: ElementRef;
  @ViewChild('measuringUnitInput', { static: false }) measuringUnitInputRef!: ElementRef;

  constructor(private ingredientService: IngredientService) {
  }

  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value,
      this.measuringUnitInputRef.nativeElement.value
    );
    this.ingredientService.addIngredient(newIngredient);
  }
}
