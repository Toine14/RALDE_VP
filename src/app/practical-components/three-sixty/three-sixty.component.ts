import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
//import { Viewer } from '@photo-sphere-viewer/core';
//import * as pannellum from 'pannellum';
declare var pannellum: any;

//import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-three-sixty',
  templateUrl: './three-sixty.component.html',
  styleUrls: ['./three-sixty.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(500, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class ThreeSixtyComponent implements OnInit {

  constructor(private practicalService: BasicPracticalComponentService) { }

  @Input() data: any;
  show_tips: boolean = false;
  tipTitle: string="";
  tipText:string="";



  ngOnInit(): void {

    //var pannellum:any = window
    //(window as any).pannellum.viewer('panorama',this.data.pano_data)

    //pannellum.viewer('panorama',this.data.pano_data)


    let viewer = pannellum.viewer('panorama', this.data.pano_data);

    for (let hotspot of this.data.hotSpots) {

      let modal_text = hotspot.modal_text
      let modal_title = hotspot.text
      viewer.addHotSpot({
        "pitch": hotspot.pitch,
        "yaw": hotspot.yaw,
        "type": hotspot.type,
        "text": hotspot.text,
        clickHandlerArgs: modal_text,
        clickHandlerFunc: (hot:any) => {
          this.toggle_modal(modal_title,modal_text)
        }
      })
    }

  }

  toggle_modal(title:string,text:string) {
    this.tipTitle=title
    this.tipText=text
    this.show_tips=true;



  }

  onTipCloseClick(){
    this.tipTitle="";
    this.tipText="";
    this.show_tips=false;
    
  }



  onNextClick() {
    this.practicalService.set_component_id(this.data.nextCompId)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }

}
