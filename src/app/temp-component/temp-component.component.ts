import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { BasicPracticalComponentService } from '../services/basic-practical-component.service';







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

    "title": "Preparing the cell culture room/conditions ",
    "nextCompId": 0,
    "previousCompId": 3,
  "img_url":"assets/img/lab_min.png"}

    constructor(private practicalService : BasicPracticalComponentService) { }
  

  ngOnInit(): void {
    this.data = this.tempdata

  }


 

  onNextClick() {
    this.practicalService.set_component_id(this.data.nextCompId)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }













}
