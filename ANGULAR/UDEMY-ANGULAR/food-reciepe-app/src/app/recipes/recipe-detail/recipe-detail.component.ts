import { RecepiesService } from './../services/recepies.service';
import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recepiesService: RecepiesService) {}

  ngOnInit() {}

  toShoppingBtnClick() {
    console.log(this.recipe);
    //this.shoppingListService.addIngredients(this.recipe.ingredients)
    this.recepiesService.addIngredients(this.recipe)
  }
}
