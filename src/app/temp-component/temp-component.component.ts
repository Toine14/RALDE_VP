import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BasicToSortItem } from '../practical-components/basic-drop-item';



@Component({
  selector: 'app-temp-component',
  templateUrl: './temp-component.component.html',
  styleUrls: ['./temp-component.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class TempComponentComponent implements OnInit {
  @Input() data: any
  badOrder!: boolean;
  goodOrder: boolean = true;
  orderChecked: boolean = false;

  ngOnInit(): void {
    this.data = this.tempdata

  }

  drop(event: CdkDragDrop<BasicToSortItem[]>) { moveItemInArray(this.data.choices, event.previousIndex, event.currentIndex); 
  this.orderChecked=false;
  this.goodOrder=true;
  this.badOrder=false;
  }

  checkOrder() {
    for (let i = 0; i < Object.keys(this.data.choices).length; i++) {

      let defined_order = parseInt(this.data.choices[i].order)
      if (defined_order != i) {
        this.badOrder = true;
        this.goodOrder=false;
      }
      this.orderChecked=true;


    }
  }









  tempdata = {
    "id": 200,
    "text_p1": "Please put these actions in the correct order",
    "text_p2": "",
    "choices": [
      {
        "order": "0",
        "answer": "Wash my hands with alcoholic solution",
      },
      {
        "order": "3",
        "answer": "Say hello to the cells",
      },
      {
        "order": "2",
        "answer": "Turn on the flow cabinet",

      },
      {
        "order": "1",
        "answer": "Prepare the medium",
        "istrue": "false"
      }
    ],
    "badAnswerText": "Bad order : try again",
    "badAnswerLink": "you can go to this part of the practical to get the correct answer",
    "goodAnswerText": "Good job you can continue the practical",
    "followingCompId": 0,
    "previousCompId": 0
  }






}
