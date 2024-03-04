import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-Foods-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodsListComponent implements OnInit {

  Foods?: Food[];
  currentFood: Food = {};
  currentIndex = -1;
  title = '';

  constructor(private FoodService: FoodService) { }

  ngOnInit(): void {
    this.retrieveFoods();
  }

  retrieveFoods(): void {
    this.FoodService.getAll()
      .subscribe({
        next: (data) => {
          this.Foods = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveFoods();
    this.currentFood = {};
    this.currentIndex = -1;
  }

  setActiveFood(Food: Food, index: number): void {
    this.currentFood = Food;
    this.currentIndex = index;
  }

  removeAllFoods(): void {
    this.FoodService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentFood = {};
    this.currentIndex = -1;

    this.FoodService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.Foods = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}