import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { BadAnswerComponent } from '../bad-answer/bad-answer.component';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  @Input() data: any;

  bad_answer_object = {
    "badAnswerText":"",
    "badAnswerLink":""
  }

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
      answer: ['', [Validators.required]]
    });
    this.choices = this.data.choices;
    this.isPictureIllustration = this.data.isPictureIllustration
    this.isAnswerPictureIllustration = this.data.isAnswerPictureIllustration
    if (this.data.isAnswerPictureIllustration) {
      if (this.data.answerIllustrationPicturesUrls.length > 1) {
        this.isMoreThanOnePictureAnswer = true
      }
    }

    this.bad_answer_object.badAnswerText = this.data.badAnswerText
    this.bad_answer_object.badAnswerLink = this.data.badAnswerLink
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
    let bad_answer_special_text = this.form.value.answer.bad_answer_special_text
    let answer = this.form.value.answer.istrue
    console.log(answer)    

   
    if (!answer) {      
      this.isGoodAnswer = false;
      this.answerText='false';
      if(bad_answer_special_text){
        this.bad_answer_object.badAnswerText=bad_answer_special_text
      }
      
      
    }
    else {     
      this.isGoodAnswer = true;
      this.answerText='true';
    
    }

    


  }





}
