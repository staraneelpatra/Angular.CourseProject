import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recpies : Recipe[] = [
    new Recipe('A Test Recipe',"This is simply a Test",
    "https://i0.wp.com/pixahive.com/wp-content/uploads/2020/10/Biryani-151674-pixahive.jpg"),
    new Recipe('A Test Recipe',"This is simply a Test",
    "https://i0.wp.com/pixahive.com/wp-content/uploads/2020/10/Biryani-151674-pixahive.jpg")
  ];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
