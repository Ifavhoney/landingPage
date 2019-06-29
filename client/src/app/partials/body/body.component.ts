import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  imageUrls: (string | IImage)[] = [
    { url: 'assets/Assets/img/home.png', backgroundSize: "contain", caption: "Home" },
    { url: 'assets/Assets/img/selection.png', backgroundSize: "contain", caption: "Professionals & Students" },
    { url: 'assets/Assets/img/login.png', caption: 'General Login', backgroundSize: "contain" },
    { url: 'assets/Assets/img/register.png', backgroundSize: 'contain', caption: "Professional Register", },
    { url: 'assets/Assets/img/register2.png', backgroundSize: 'contain', caption: "Student Register", },
    { url: 'assets/Assets/img/mealTypes.png', backgroundSize: 'contain', caption: "Sample Meal Types", },
    { url: 'assets/Assets/img/foodOptions.png', backgroundSize: 'contain', caption: 'Food Options', },



  ]

  constructor() { }

  ngOnInit() {
    this.imageUrls
  }

}
