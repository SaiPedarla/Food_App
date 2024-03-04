import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFoodComponent } from './components/add-Food/add-food.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { FoodsListComponent } from './components/food-list/food-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFoodComponent,
    FoodDetailsComponent,
    FoodsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
