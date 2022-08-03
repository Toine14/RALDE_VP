import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  @Input() data: any;

  form!: FormGroup;
  choices: any;
  isGoodAnswer!: boolean;
  answerText: string = '';
  isPictureIllustration: boolean = false;
  isAnswerPictureIllustration: boolean = false;
  isMoreThanOnePictureAnswer: boolean = false;

  size1 = '50em';
  size2 = '20em'


  constructor(private practicalService: BasicPracticalComponentService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      answers: ['', [Validators.required]]
    });
    this.choices = this.data.choices;
    this.isPictureIllustration = this.data.isPictureIllustration
    this.isAnswerPictureIllustration = this.data.isAnswerPictureIllustration
    if (this.data.isAnswerPictureIllustration) {
      if (this.data.answerIllustrationPicturesUrls.length > 1) {
        this.isMoreThanOnePictureAnswer = true
      }
    }
  }

  onNextClick() {
    this.practicalService.set_component_id(this.data.nextCompId)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }


  isGoodAnswered() {
    if (this.isGoodAnswer == null || 'undefined') {
      return false
    }
    else if (this.isGoodAnswer == false) {
      return false
    }
    else { return true }
  }



  submit() {
    let answer = this.form.value.answers.istrue
    let answerBool = JSON.parse(answer)
    console.log(typeof (answer))
    if (!answerBool) {
      this.answerText = 'false'
      this.isGoodAnswer = false;

    }
    else {
      this.answerText = 'true'
      this.isGoodAnswer = true;

    }

    console.log(answer)


  }





}
