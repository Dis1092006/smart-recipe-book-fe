import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { IngredientListComponent } from './ingredients/ingredient-list/ingredient-list.component';
import { IngredientEditComponent } from './ingredients/ingredient-edit/ingredient-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientListComponent,
    IngredientEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
