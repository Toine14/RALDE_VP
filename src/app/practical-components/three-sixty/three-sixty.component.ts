import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';
//import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-three-sixty',
  templateUrl: './three-sixty.component.html',
  styleUrls: ['./three-sixty.component.scss']
})
export class ThreeSixtyComponent implements OnInit {

  constructor(private practicalService: BasicPracticalComponentService) { }

  @Input() data: any

  

  ngOnInit(): void {

   (window as any).pannellum.viewer('panorama',this.data.pano_data)

  
  }

  onNextClick() {
    this.practicalService.set_component_id(this.data.nextCompId)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }

}
