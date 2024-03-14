import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecepiesService } from '../services/recepies.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recepiesService: RecepiesService) {}

  ngOnInit() {
    this.recipes = this.recepiesService.getReciepes();
  }

  // onRecipeSelected(recipe: Recipe) {
  //  // this.recipeWasSelected.emit(recipe);
  //  this.recepiesService.recipeSelected.emit(recipe)
  // }
}
