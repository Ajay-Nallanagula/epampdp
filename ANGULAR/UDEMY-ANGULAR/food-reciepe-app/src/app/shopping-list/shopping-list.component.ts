import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  //providers: [ShoppingListService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientAdded.subscribe((ings) => {
      this.ingredients = ings;
    });
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   //this.ingredients.push(ingredient);
  //   this.shoppingListService.addIngredient(ingredient);
  // }
}
