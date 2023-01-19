import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CdkDragDrop, moveItemInArray, transferArrayItem, } from '@angular/cdk/drag-drop';
import { BasicToSortItem } from '../basic-drop-item';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.component.html',
  styleUrls: ['./reorder.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ReorderComponent implements OnInit {

  @Input() data: any
  badOrder!: boolean;
  goodOrder: boolean = true;
  orderChecked: boolean = false;


  base_items: any = []
  trash_items: any = []

  ngOnInit(): void {
    this.base_items = this.data.choices
  }

  constructor(private practicalService: BasicPracticalComponentService) {
  };


  // drop(event: CdkDragDrop<BasicToSortItem[]>) { 

  //   if (event.previousContainer === event.container) {
  //   moveItemInArray(this.data.choices, event.previousIndex, event.currentIndex); }
  //   else{
  //     transferArrayItem( event.previousContainer.data,this.data.choices, event.previousIndex, event.currentIndex)

  //   }


  // this.orderChecked=false;
  // this.goodOrder=true;
  // this.badOrder=false;
  // }


  drop(event: CdkDragDrop<string[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data)
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log(event.currentIndex)
    }
    this.orderChecked = false;
    this.goodOrder = true;
    this.badOrder = false;
  }

  checkOrder() {
    for (let i = 0; i < Object.keys(this.data.choices).length; i++) {
      if (this.data.choices[i].is_bad_step) {
        this.badOrder = true;
        this.goodOrder = false;
      }
      let defined_order = (this.data.choices[i].order)
      if (defined_order != i + 1) {
        this.badOrder = true;
        this.goodOrder = false;
      }
      this.orderChecked = true;
    }
  }


  onNextClick() {
    this.practicalService.set_component_id(this.data.nextCompId)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }

}
