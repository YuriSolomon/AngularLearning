import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg')
  ];

  constructor() {

  }
}
