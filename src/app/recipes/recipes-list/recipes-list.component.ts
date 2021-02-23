import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe("Test Recipes","This is Test Recipes",
     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/8.28.12CheeseburgerMacByLuigiNovi1.jpg/1200px-8.28.12CheeseburgerMacByLuigiNovi1.jpg"),

     new Recipe("Test Recipes","This is Test Recipes",
     "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pakistani_Food_Karahi_Beef.jpg/1200px-Pakistani_Food_Karahi_Beef.jpg")
     ];

  constructor() { }

  ngOnInit(): void {
  }

}
