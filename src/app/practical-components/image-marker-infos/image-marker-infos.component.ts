import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';

@Component({
  selector: 'app-image-marker-infos',
  templateUrl: './image-marker-infos.component.html',
  styleUrls: ['./image-marker-infos.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(500, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class ImageMarkerInfosComponent implements OnInit {

  @Input() data: any;

  show_next: boolean = false;
 
  show_tips: boolean = false;
  answer_text_false: string = '';
  tipTitle: string = '';
  tipText: string = '';
  markerCount!:number;
  clickedItem:number[]=[]

  constructor(private practicalService: BasicPracticalComponentService) { }

  ngOnInit(): void {
    
    this.markerCount = this.data.markers.length
    console.log(this.markerCount)
  }

  onSpotClick(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var id = target.id;

    var index: number = +id;
    //const markerElement = <HTMLElement>document.getElementById(id);

    console.log(target);

    if(!this.clickedItem.includes(index)){
      this.clickedItem.push(index)
    }
    

    this.tipTitle = this.data.markers[index].card_info.title
    this.tipText = this.data.markers[index].card_info.text_p1
    this.show_tips = true;

  }

  onTipCloseClick(){
    this.show_tips=false;
    this.checkIfEveryItemClicked()
  }

  checkIfEveryItemClicked(){
    if(this.clickedItem.length==this.markerCount){
      this.show_next=true;

    }
  }

  onNextClick() {
    this.practicalService.set_component_id(this.data.nextCompId)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }

}
