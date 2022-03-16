import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-temp-component',
  templateUrl: './temp-component.component.html',
  styleUrls: ['./temp-component.component.scss']
})
export class TempComponentComponent implements OnInit {

  @Input() data: any;

  form!: FormGroup;
  choices:any;


  constructor(private practicalService: BasicPracticalComponentService, private formBuilder: FormBuilder) {

   }

  ngOnInit(): void {
    this.data = this.temp_data;
    this.form = this.formBuilder.group({
      orders: ['',[Validators.required]]
    });
    this.choices=this.data.choices
  }



  temp_data: any = {
    "id": 1,
    "text_p1": "What medium is suitable for HepG2 cells ?",
    "choices": [{"id":"ChoiceNb1", "answer": "Minimum Essential Medium, fetal bovine serum 10%, pen/strep 1%", "istrue": "true" }, 
    {"id":"ChoiceNb2", "answer": "F-12K Medium, fetal bovine serum 10%, pen/strep 1%", "istrue": "false"},
     {"id":"ChoiceNb3", "answer": "Dulbecco’s Modified Eagles Medium, fetal bovine serum 10%, pen/strep 1%", "istrue": "false"},
     {"id":"ChoiceNb4", "answer": "RPMI-1640 Medium, fetal bovine serum 10%, pen/strep 1%", "istrue": "false"}],

    "btn1CompId": 1,

    "followingCompId": 2,
    "previousCompId": 0
  }

  onCheckClick(){

  }


  onNextClick() {
    this.practicalService.set_component_id(this.data.followingCompId)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }




   
 submit(){
    console.log(this.form.value);
  }
 






}
