import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecepiesService } from './services/recepies.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecepiesService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recepiesService: RecepiesService) {}

  ngOnInit() {
    this.recepiesService.recipeSelected.subscribe(
      (reciepe) => (this.selectedRecipe = { ...reciepe })
    );
  }
}
