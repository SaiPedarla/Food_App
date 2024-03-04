import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-Food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentFood: Food = {
    title: '',
    description: '',
    published: false
  };
  
  message = '';

  constructor(
    private FoodService: FoodService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getFood(this.route.snapshot.params["id"]);
    }
  }

  getFood(id: string): void {
    this.FoodService.get(id)
      .subscribe({
        next: (data) => {
          this.currentFood = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentFood.title,
      description: this.currentFood.description,
      published: status
    };

    this.message = '';

    this.FoodService.update(this.currentFood.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentFood.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateFood(): void {
    this.message = '';

    this.FoodService.update(this.currentFood.id, this.currentFood)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Food was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteFood(): void {
    this.FoodService.delete(this.currentFood.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/Foods']);
        },
        error: (e) => console.error(e)
      });
  }

}