import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from '../services/basic-practical-component.service';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-temp-component',
  templateUrl: './temp-component.component.html',
  styleUrls: ['./temp-component.component.scss'],
})
export class TempComponentComponent implements OnInit {
  @Input() data: any

  form!: FormGroup;

  dragable_element!: any;
  receptor: any = [];
  receptor_place_holder_visibility: boolean[] = [];
  answer_data: any = [];

  answered: boolean = false;
  goodAnswer: boolean = false;
  orderChecked: boolean = false;
  goodAnswerCount: number = 0;

  tempdata = {
    "id": 706,
    "h2": "Subculturing of cells",
    "text_p1": "Do you have a contamination? Match the contamination type with the right picture, if applicable",
    "nextCompId": 707,
    "previousCompId": 705,
    "possible_answers": [{
      "text": "No contamination",
      "id": 1,
    }, {
      "text": "Bacteria contamination",
      "id": 2,
    }, {
      "text": "Yeast contamination",
      "id": 3,
    },
    {
      "text": "Fungi contamination",
      "id": 4,
    },
    {
      "text": "No contamination but cells are dying",
      "id": 5,
    }
  ],

    "badAnswerText": "Bad answer, at least one picture is bad labelled",
    "goodAnswerText": "All pictures where matched with the correct label",
    "picture_box": [
      {
        "img_url": "https://imgs.ralde.eu/conta_1_temp.png",
        "expected_id": 3,

      },
      {
        "img_url": "https://imgs.ralde.eu/conta_2_temp.png",
        "expected_id": 2,

      },
      {
        "img_url": "https://imgs.ralde.eu/conta_3_temp.png",
        "expected_id": 1,

      },

    ]
  }


  constructor(private practicalService: BasicPracticalComponentService, fb: FormBuilder) {
    this.form = fb.group({
      selectedAnswers: new FormArray([])
    });
  }


  ngOnInit(): void {
    this.data = this.tempdata;
    this.dragable_element = this.data.possible_answers
    for (let box of this.data.picture_box) {

      this.receptor.push([])
      this.receptor_place_holder_visibility.push(true);
      this.answer_data.push({ "expected_id": box.expected_id, "answered_id": null })
    }
    console.log(this.answer_data)
  }



  checkAnswers() {
    console.log(this.answer_data)
    var result = true
    this.answer_data.forEach((data:any)=> (data.expected_id == data.answered_id) ? null
    : result=false)
    console.log(result)
    
    if(result){
      this.goodAnswer=true
    }
    else{this.goodAnswer=false}
    this.answered = true

  }

  onNextClick() {
    this.practicalService.set_component_id(this.data.nextCompId)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }


  drop(event: CdkDragDrop<any[]>, index: any) {

    this.answer_data[index].answered_id = event.previousContainer.data[event.previousIndex].id

    this.receptor_place_holder_visibility[index] = false

    if (this.receptor[index].length > 0) {
      this.receptor[index].pop()

    }
    if (event.previousContainer === event.container) { }
    else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  donorDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) { }
    else {
      //console.log('donor_drop')
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }













}
