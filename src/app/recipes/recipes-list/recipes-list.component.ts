import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); 
  recpies : Recipe[] = [
    new Recipe('Hydrabadi Dum Biryani',"This is simply a Test",
    "https://i0.wp.com/pixahive.com/wp-content/uploads/2020/10/Biryani-151674-pixahive.jpg"),
    new Recipe('Kolkata Biryani',"This is simply a Test",
    "https://i0.wp.com/pixahive.com/wp-content/uploads/2020/10/Biryani-151674-pixahive.jpg")
  ];
  
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
