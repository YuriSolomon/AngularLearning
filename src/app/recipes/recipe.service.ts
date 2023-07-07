import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Schnitzel',
            'This is a test',
            'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Chips', 20)
            ]),
        new Recipe(
            'Burger',
            'This is a test',
            'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('buns', 2)
            ])
    ];

    constructor(private slService: ShoppingListService) {};

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}