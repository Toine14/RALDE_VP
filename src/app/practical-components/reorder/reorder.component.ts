import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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

  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<BasicToSortItem[]>) { moveItemInArray(this.data.choices, event.previousIndex, event.currentIndex); 
  this.orderChecked=false;
  this.goodOrder=true;
  this.badOrder=false;
  }

  checkOrder() {
    for (let i = 0; i < Object.keys(this.data.choices).length; i++) {
      let defined_order = (this.data.choices[i].order)
      if (defined_order != i+1) {
        this.badOrder = true;
        this.goodOrder=false;
      }
      this.orderChecked=true;
    }
  }

}
