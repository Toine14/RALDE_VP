import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';

@Component({
  selector: 'app-question-img',
  templateUrl: './question-img.component.html',
  styleUrls: ['./question-img.component.scss']
})
export class QuestionImgComponent implements OnInit {
  @Input() data: any
  form!: FormGroup;

  answered: boolean = false;
  goodAnswer: boolean = false;
  orderChecked: boolean = false;
  goodAnswerCount: number = 0;


  constructor(fb: FormBuilder, private practicalService: BasicPracticalComponentService) {
    this.form = fb.group({
      selectedAnswers: new FormArray([])
    });
  }

  ngOnInit(): void {    
    this.goodAnswerCount = this.howManyGoodAnswers(this.data.answers)
    console.log(this.goodAnswerCount)
  }


  howManyGoodAnswers(answers: any[]) {
    return answers.filter(x => x.isCorrect).length

  }

  onNextClick() {
    this.practicalService.set_component_id(this.data.nextCompId)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
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



}
