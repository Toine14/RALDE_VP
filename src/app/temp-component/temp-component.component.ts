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

  dragable_element!:any;
  receptor:any=[];

  answered: boolean = false;
  goodAnswer: boolean = false;
  orderChecked: boolean = false;
  goodAnswerCount: number = 0;

  tempdata = {
    "id": 706,
    "h2": "Thawing the cells",
    "text_p1": "Select the correct culture material",
    "nextCompId": 707,
    "previousCompId": 705,
    "possible_answers": [{
      "text": "No contamination",
      "id": 1,
    },{
      "text": "Bacteria contamination",
      "id": 2,
    },{
      "text": "Yeast contamination",
      "id": 3,
    }],

    "badAnswerText": "Bad answer, please re-read your notes",
    "goodAnswerText": "Cells are maintained in culture flasks. Cryotubes normally contain low number of cells so a T25 would keep cells closer to each other avoiding low density-related stress.",
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
    for(let box in this.data.picture_box){
      this.receptor.push([])
    }
    console.log(this.receptor)
    
    

  }


 /* howManyGoodAnswers(answers: any[]) {
    return answers.filter(x => x.isCorrect).length

  }
  */

  onCheckboxChange(event: any) {
    const selectedAnswers = (this.form.controls['selectedAnswers'] as FormArray);
    if (event.target.checked) {
      selectedAnswers.push(new FormControl(event.target.value));
    } else {
      const index = selectedAnswers.controls.findIndex(x => x.value === event.target.value);
      selectedAnswers.removeAt(index);
    }
  }

  checkOrder() {
    this.answered = true;
    const selectedAnswers = this.form.value.selectedAnswers
    console.log(selectedAnswers)
    let countOfTrue = 0
    let totalTicked = 0
    for (let answer of selectedAnswers) {
      totalTicked++
      if (answer === 'true') {
        countOfTrue++
      }
    }
    if (this.goodAnswerCount == countOfTrue && totalTicked == countOfTrue) {
      this.goodAnswer = true;
      console.log("good")
    }
    else {
      console.log("bad");
      this.goodAnswer = false;
    }
  }

  onNextClick() {
    this.practicalService.set_component_id(this.data.nextCompId)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }


  drop(event: CdkDragDrop<any[]>, index:any) {

    console.log('receptor_drop')
    console.log(this.receptor[index])

    if(this.receptor[index].length>0){
      this.receptor[index].pop()
    }
    //this.receptor[index]=event.container.data


    if (event.previousContainer === event.container) { } 
    else {

      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  donorDrop(event: CdkDragDrop<any[]>){
  //  if (event.previousContainer === event.container) { }
  //  else {
console.log('donor_drop')
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    //}
  }













}
