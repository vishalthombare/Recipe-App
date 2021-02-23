import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

  ingredients:Ingredient[]=[
    new Ingredient('Tomato',5),
    new Ingredient('Potato',10)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
