import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from '../services/basic-practical-component.service';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';







@Component({
  selector: 'app-temp-component',
  templateUrl: './temp-component.component.html',
  styleUrls: ['./temp-component.component.scss'],
})
export class TempComponentComponent implements OnInit {
  @Input() data: any

  form!: FormGroup;

  answered: boolean = false;
  goodAnswer: boolean = false;
  orderChecked: boolean = false;
  goodAnswerCount: number = 0;

  tempdata=  {
    "id": 706,
    "h2": "Thawing the cells",
    "text_p1": "Select the correct culture material",
    "nextCompId": 707,
    "previousCompId": 705,
    "isAnswerPictureIllustration": true,
    "answerIllustrationPicturesUrls": ["assets/img/t25_note_ok.png"],
    "badAnswerText": "Bad answer, please re-read your notes",
    "goodAnswerText": "Cells are maintained in culture flasks. Cryotubes normally contain low number of cells so a T25 would keep cells closer to each other avoiding low density-related stress.",
    "answers": [
        {
            "text": "T25",
            "isCorrect": true,
            
        },
        {
            "text": "T75",
            "isCorrect": false,
            
        },
        {
            "text": "6 wells plate",
            "isCorrect": true,
            
        },
        {
            "text": "96 wells plate",
            "isCorrect": false,
            
        },
        {
            "text": "125 ml erlenmeyer cell culture flask",
            "isCorrect": false,
            
        }
    ]
}
 

    constructor(private practicalService : BasicPracticalComponentService, fb: FormBuilder) { 
      this.form = fb.group({
        selectedAnswers: new FormArray([])
      });
    }
  

  ngOnInit(): void {
    this.data = this.tempdata ;
    this.goodAnswerCount = this.howManyGoodAnswers(this.data.answers)
    console.log(this.goodAnswerCount) 

  }


  howManyGoodAnswers(answers: any[]) {
    return answers.filter(x => x.isCorrect).length

  }

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


  











}
