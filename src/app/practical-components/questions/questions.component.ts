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
    "badAnswerText": "",
    "badAnswerLink": [],
  }

  form!: FormGroup;
  choices: any;
  isGoodAnswer!: boolean;
  answerText: string = '';
  isPictureIllustration: boolean = false;
  isAnswerPictureIllustration: boolean = false;
  isMoreThanOnePictureAnswer: boolean = false;
  size1 = '50em';
  size2 = '20em';

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


  }

  onNextClick() {
    this.practicalService.set_component_id(this.data.nextCompId);
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId);
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

    this.bad_answer_object.badAnswerLink = [];
    this.bad_answer_object.badAnswerText = "";



    let bad_answer_special_text = this.form.value.answer.bad_answer_special_text;
    let badAnswerLink = this.form.value.answer.badAnswerLink;
    let answer = this.form.value.answer.istrue;
    //console.log(answer)
    //let all = this.form.value
    //console.log(all)
    if (answer == false) {
      this.isGoodAnswer = false;
      this.answerText = 'false';
      if (bad_answer_special_text) {
        if (this.data.badAnswerText != "") {
          this.bad_answer_object.badAnswerText = this.data.badAnswerText
        }
        this.bad_answer_object.badAnswerText = bad_answer_special_text;
      }
      if (badAnswerLink) {
        this.bad_answer_object.badAnswerLink = badAnswerLink;
      }
    }
    else {
      this.isGoodAnswer = true;
      this.answerText = 'true';
    }
  }

  clear_style() {
    for (let i in this.data.choices) {
      let id = "imageToSelect_" + i
      let to_style = document.getElementById(id)
      to_style!.style.setProperty('border-style', 'none');
    }
  }

  onCheckboxChange(event: any, i: any) {

    this.clear_style()
    if (this.data.isAnswerWithPictures) {
      let id = "imageToSelect_" + i
      let to_style = document.getElementById(id)
      if (event.target.checked) {
        to_style!.style.setProperty('border', '10px solid #3ae08d')
        console.log(i)
      }
    }
  }
}