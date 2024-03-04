import { Component } from '@angular/core';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-add-Food',
  templateUrl: './add-Food.component.html',
  styleUrls: ['./add-Food.component.css']
})
export class AddFoodComponent {

  Food: Food = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private FoodService: FoodService) { }
 
  saveFood(): void {
    const data = {
      title: this.Food.title,
      description: this.Food.description
    };

    this.FoodService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newFood(): void {
    this.submitted = false;
    this.Food = {
      title: '',
      description: '',
      published: false
    };
  }

}