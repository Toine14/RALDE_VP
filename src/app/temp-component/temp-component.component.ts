import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-temp-component',
  templateUrl: './temp-component.component.html',
  styleUrls: ['./temp-component.component.scss'],
})
export class TempComponentComponent implements OnInit {
  @Input() data: any;

  good_answer: boolean = false;
  show_tips_false: boolean = false;
  show_tips: boolean = false;
  answer_text_false: string = '';
  answer_text_true: string = '';

  constructor() { }

  ngOnInit(): void {
    this.data = this.temp_data
  }


  temp_data: any = {
    "id": 1,
    "img_url": "assets/img/labor.jpg",
    "marker_url": "assets/img/point.png",
    "markers": [{ "title": "entrance", "text": "A", "x_pos": 30, "y_pos": 75, "isCorrect": false, "answer_text": "try again please", "card_info": { "title": "This is a labcoat", "text_p2": "A white coat, also known as a laboratory coat or lab coat, is a knee-length overcoat or smock worn by professionals in the medical field or by those involved in laboratory work. The coat protects their street clothes and also serves as a simple uniform. The garment is made from white or light-colored cotton, linen, or cotton polyester blend, allowing it to be washed at high temperature and making it easy to see if it is clean." } }, { "title": "water bath", "text": "B", "x_pos": 45, "y_pos": 65, "isCorrect": false, "answer_text": "not at all" }, { "title": "inverted microscope", "text": "C", "x_pos": 48, "y_pos": 60, "isCorrect": false, "answer_text": "seriously ?" }, { "title": "CO2 incubator", "text": "D", "x_pos": 57, "y_pos": 60, "isCorrect": false, "answer_text": "you better not" }, { "title": "alcohol bottle", "text": "E", "x_pos": 61, "y_pos": 70, "isCorrect": false, "answer_text": "too dangerous" }, { "title": "flow cabinet", "text": "F", "x_pos": 68, "y_pos": 65, "isCorrect": true, "answer_text": "Cell culture medium should indeed be prepared in a sterile enviroment" }, { "title": "centrifuge", "text": "G", "x_pos": 72, "y_pos": 65, "isCorrect": false, "answer_text": "Do not jump please" }],
    "img_size": "",
    "text_p1": "What is the correct spot to prepare the medium?",
    "text_p2": "",
    "followingCompId": 2,
    "previousCompId": 0
  }

  onSpotClick(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var id = target.id;

    if (id.includes('marker_')) {
      console.log('je contiens')
      id = id.replace('marker_', "")
    }
    var index: number = +id
    const markerElement = <HTMLElement>document.getElementById('marker_' + id)

    
      
      this.show_tips = true
      this.good_answer = true
      markerElement.style.backgroundColor = 'green'
      this.answer_text_true = this.data.markers[index].answer_text

    

  }






}
