import { Component, Input, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { BadAnswerComponent } from '../bad-answer/bad-answer.component';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';

@Component({
  selector: 'app-img-text-btn',
  templateUrl: './img-text-btn.component.html',
  styleUrls: ['./img-text-btn.component.scss']
})
export class ImgTextBtnComponent implements OnInit {

 

  @Input() data: any;




  

  constructor(private practicalService: BasicPracticalComponentService) { }

  ngOnInit(): void {
   console.log(this.data)
  }

  onNextClick(){
    this.practicalService.set_component_id(this.data.nextCompId)    
  }
  onPreviousClick(){
    this.practicalService.set_component_id(this.data.previousCompId)    
  }

}
