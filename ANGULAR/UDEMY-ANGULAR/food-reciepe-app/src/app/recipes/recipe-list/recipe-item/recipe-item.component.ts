import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecepiesService } from '../../services/recepies.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private reciepeService: RecepiesService) {}

  ngOnInit() {}

  onSelected() {
    //    this.recipeSelected.emit();
    this.reciepeService.recipeSelected.emit(this.recipe);
  }
}
