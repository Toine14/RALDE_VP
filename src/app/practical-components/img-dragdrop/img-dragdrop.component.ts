import { CdkDragDrop, copyArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';

@Component({
  selector: 'app-img-dragdrop',
  templateUrl: './img-dragdrop.component.html',
  styleUrls: ['./img-dragdrop.component.scss']
})
export class ImgDragdropComponent implements OnInit {

  @Input() data: any;
  dragable_element!: any;
  receptor: any = [];
  receptor_place_holder_visibility: boolean[] = [];
  answer_data: any = [];

  answered: boolean = false;
  goodAnswer: boolean = false;
  
  

  constructor(private practicalService: BasicPracticalComponentService,) { }

  ngOnInit(): void {
    
    this.dragable_element = this.data.possible_answers
    for (let box of this.data.picture_box) {

      this.receptor.push([])
      this.receptor_place_holder_visibility.push(true);
      this.answer_data.push({ "expected_id": box.expected_id, "answered_id": null })
    }
  }

  checkAnswers() {
    console.log(this.answer_data)
    var result = true
    this.answer_data.forEach((data:any)=> (data.expected_id == data.answered_id) ? null
    : result=false)
    console.log(result)
    
    if(result){
      this.goodAnswer=true
    }
    else{this.goodAnswer=false}
    this.answered = true

  }

  onNextClick() {
    this.practicalService.set_component_id(this.data.nextCompId)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }


  drop(event: CdkDragDrop<any[]>, index: any) {

    this.answer_data[index].answered_id = event.previousContainer.data[event.previousIndex].id

    this.receptor_place_holder_visibility[index] = false

    if (this.receptor[index].length > 0) {
      this.receptor[index].pop()

    }
    if (event.previousContainer === event.container) { }
    else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  donorDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) { }
    else {
      //console.log('donor_drop')
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


}
