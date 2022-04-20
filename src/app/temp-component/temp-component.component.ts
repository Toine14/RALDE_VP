import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';







@Component({
  selector: 'app-temp-component',
  templateUrl: './temp-component.component.html',
  styleUrls: ['./temp-component.component.scss'],
})
export class TempComponentComponent implements OnInit {
  @Input() data: any
  answered: boolean = false;
  goodAnswer: boolean = false;
  orderChecked: boolean = false;
  goodAnswerCount: number = 0;


  form!: FormGroup;
  tempdata: any = {

    "text_p1": "Start the flow cabinet",
    "answers": [
      { "text": "half flow", "isCorrect": false, "img_url":"assets/img/half_flow.png" },
      { "text": "full flow", "isCorrect": true, "img_url":"assets/img/full_flow.png" },
      { "text": "open the window till half-way", "isCorrect": false, "img_url":"assets/img/half_open.png" },
      { "text": "open window about one third", "isCorrect": true, "img_url":"assets/img/third_open.png" },
      
    ]
  }

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      selectedAnswers:  new FormArray([])
     });
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
    const selectedAnswers = this.form.value.selectedAnswers
    console.log(selectedAnswers)
    let countOfTrue = 0
    let totalTicked = 0
    for(let answer of selectedAnswers){
      totalTicked++      
      if(answer==='true'){
        countOfTrue++
      }
    }
    if(this.goodAnswerCount==countOfTrue && totalTicked == countOfTrue){
      console.log("good")
    }
    else(console.log("bad")) 
  }

  ngOnInit(): void {
    this.data = this.tempdata
    this.goodAnswerCount = this.howManyGoodAnswers(this.data.answers)
    console.log(this.goodAnswerCount)
  }


  howManyGoodAnswers(answers: any[]) {
    return answers.filter(x => x.isCorrect).length
    
  }














}
