import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';

@Component({
  selector: 'app-image-marker-choice',
  templateUrl: './image-marker-choice.component.html',
  styleUrls: ['./image-marker-choice.component.scss']
})
export class ImageMarkerChoiceComponent implements OnInit {

  @Input() data: any;

  good_answer: boolean = false;
  show_tips_false:boolean = false;
  show_tips_true:boolean = false;
  answer_text_false:string='';
  answer_text_true:string='';

  constructor(private practicalService: BasicPracticalComponentService) { }

  ngOnInit(): void {
    //this.data = this.temp_data
  }


  temp_data: any = {
    "id": 1,
    "img_url": "assets/img/labor.jpg",
    "marker_url": "assets/img/point.png",
    "markers": [{ "title": "entrance", "text": "A", "x_pos": 30, "y_pos": 75, "isCorrect": false, "answer_text": "try again please" }, { "title": "water bath", "text": "B", "x_pos": 45, "y_pos": 65, "isCorrect": false, "answer_text": "not at all" }, { "title": "inverted microscope", "text": "C", "x_pos": 48, "y_pos": 60, "isCorrect": false, "answer_text": "seriously ?" }, { "title": "CO2 incubator", "text": "D", "x_pos": 57, "y_pos": 60, "isCorrect": false, "answer_text": "you better not" }, { "title": "alcohol bottle", "text": "E", "x_pos": 61, "y_pos": 70, "isCorrect": false, "answer_text": "too dangerous" }, { "title": "flow cabinet", "text": "F", "x_pos": 68, "y_pos": 65, "isCorrect": true, "answer_text": "Cell culture medium should indeed be prepared in a sterile enviroment" }, { "title": "centrifuge", "text": "G", "x_pos": 72, "y_pos": 65, "isCorrect": false, "answer_text": "Do not jump please" }],
    "img_size": "",
    "text_p1": "What is the correct spot to prepare the medium?",
    "text_p2": "",
    "followingCompId": 2,
    "previousCompId": 0
  }

  onSpotClick(event: any, answer: boolean) {
    var target = event.target || event.srcElement || event.currentTarget;
    var id = target.id;

    if (id.includes('marker_')) {
      console.log('je contiens')
      id = id.replace('marker_', "")
    }
    var index:number = +id
    const markerElement = <HTMLElement>document.getElementById('marker_'+id)

    if (answer) {
      this.show_tips_false = false
      this.show_tips_true=true
      this.good_answer = true      
      markerElement.style.backgroundColor='green'
      this.answer_text_true=this.data.markers[index].answer_text
      
    }
    else {
      this.show_tips_true = false
      this.show_tips_false=true
      markerElement.style.backgroundColor='red'
      this.answer_text_false=this.data.markers[index].answer_text
      
    }
  }
  onNextClick() {
    this.practicalService.set_component_id(this.data.followingCompId)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }

}
