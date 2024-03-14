import { Component } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredients: IngredientModel[] = [
    new IngredientModel('pasupu', 100),
    new IngredientModel('Pepper', 50),
  ];
  constructor() {}

  onAddIngredient(ing: IngredientModel) {
    this.ingredients.push(ing);
  }
}
