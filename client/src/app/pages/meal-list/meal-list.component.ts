import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MealService } from './../../services/meal.service';

import { Meal } from './../../models/meal';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  title: string;
  meals: Meal[];

  constructor
    (private route: ActivatedRoute,
      private mealService: MealService,
      private flashMessage: FlashMessagesService,
      private router: Router
    ) { }

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
    this.meals = new Array<Meal>();
    this.displayMealList();
  }

  displayMealList(): void {
    this.mealService.getList().subscribe(data => {
      if (data.success) {
        console.log(data);
        this.mealService = data.mealList;
      } else {
        this.flashMessage.show('User must be logged-in', { cssClass: 'alert-danger', timeOut: 3000 });
      }
    });
  }

}
