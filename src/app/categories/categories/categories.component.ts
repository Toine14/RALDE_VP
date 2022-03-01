import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [{
    title: "Biology",
    img_src: "./../../assets/img/bio.png",
    text: "",
    nav_to:"/practicals/1"
  }, {
    title: "Physics",
    img_src: "./../../assets/img/phy.png",
    text:"",
    nav_to: "/practicals/2",
  },
  {
    title: "Chemistry",
    img_src: "./../../assets/img/chemistry.png",
    text:"",
    nav_to: "/practicals/3",
  },
]

}
