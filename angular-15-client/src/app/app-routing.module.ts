import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsListComponent } from './components/food-list/food-list.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { AddFoodComponent } from './components/add-Food/add-food.component';

const routes: Routes = [
  { path: '', redirectTo: 'Foods', pathMatch: 'full' },
  { path: 'Foods', component: FoodsListComponent },
  { path: 'Foods/:id', component: FoodDetailsComponent },
  { path: 'add', component: AddFoodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }