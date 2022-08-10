import { Component, Input, OnInit } from '@angular/core';
import {BasicPracticalComponentService} from '../../services/basic-practical-component.service'
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-multiple-choices',
  templateUrl: './multiple-choices.component.html',
  styleUrls: ['./multiple-choices.component.scss']
})
export class MultipleChoicesComponent implements OnInit {

  @Input() data: any

  form!: FormGroup;

  answered: boolean = false;
  goodAnswer: boolean = false;
  orderChecked: boolean = false;
  goodAnswerCount: number = 0;
  isPictureIllustration: boolean = false;

  constructor(private practicalService : BasicPracticalComponentService, fb: FormBuilder) {
    this.form = fb.group({
      selectedAnswers: new FormArray([])
    });
   }

  ngOnInit(): void {
    this.goodAnswerCount = this.howManyGoodAnswers(this.data.answers)
    this.isPictureIllustration = this.data.isPictureIllustration
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
