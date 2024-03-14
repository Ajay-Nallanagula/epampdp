import { Recipe } from './../recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class RecepiesService {
  /**
   *
   */
  constructor(private sls: ShoppingListService) {}
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Chicken', 100), new Ingredient('Eggs', 12)]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Mutton', 50), new Ingredient('Spinach', 8)]
    ),
  ];

  getReciepes() {
    return [...this.recipes];
  }

  addIngredients(recipe: Recipe) {
    this.sls.addIngredients(recipe.ingredients);
  }
}
