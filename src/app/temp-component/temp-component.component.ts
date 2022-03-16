import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-temp-component',
  templateUrl: './temp-component.component.html',
  styleUrls: ['./temp-component.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({opacity: 0 }),
            animate('0.5s ease-in-out', 
                    style({opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('0.5s ease-in-out', 
                    style({opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class TempComponentComponent implements OnInit {

  @Input() data: any;

  form!: FormGroup;
  choices: any;
  isGoodAnswer!: boolean;
  answerText: string =''


  constructor(private practicalService: BasicPracticalComponentService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.data = this.temp_data;
    this.form = this.formBuilder.group({
      answers: ['', [Validators.required]]
    });
    this.choices = this.data.choices
  }





  temp_data: any = {
    "id": 1,
    "text_p1": "What medium is suitable for HepG2 cells ?",
    "choices": [{ "id": "ChoiceNb1", "answer": "Minimum Essential Medium, fetal bovine serum 10%, pen/strep 1%", "istrue": "true" },
    { "id": "ChoiceNb2", "answer": "F-12K Medium, fetal bovine serum 10%, pen/strep 1%", "istrue": "false" },
    { "id": "ChoiceNb3", "answer": "Dulbecco’s Modified Eagles Medium, fetal bovine serum 10%, pen/strep 1%", "istrue": "false" },
    { "id": "ChoiceNb4", "answer": "RPMI-1640 Medium, fetal bovine serum 10%, pen/strep 1%", "istrue": "false" }],
    "badAnswerText":"Bad answer : the correct answer can be found",
    "badAnswerLink":"https://www.atcc.org/products/hb-8065",
    "goodAnswerText":"Good job you can continue the practical",
    "followingCompId": 2,
    "previousCompId": 0
  }

  onCheckClick() {

  }


  onNextClick() {
    this.practicalService.set_component_id(this.data.followingCompId)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }


  isGoodAnswered(){
    if(this.isGoodAnswer==null || 'undefined'){
      return false
    }
    else if(this.isGoodAnswer == false)
      {return false
    }
    else{return true}
  }



  submit() {
    let answer = this.form.value.answers.istrue
    let answerBool = JSON.parse(answer)
    console.log(typeof (answer))
    if (!answerBool) {
      this.answerText='false'
      this.isGoodAnswer=false;
      
    }
    else {
      this.answerText='true'
      this.isGoodAnswer=true;

    }

    console.log(answer)


  }







}
