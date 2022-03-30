import { Component, Input, OnInit,Output, EventEmitter  } from '@angular/core';
import { Subject } from 'rxjs';
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
    //console.log(this.data)
  }

  onNextClick(){
    this.practicalService.set_component_id(this.data.nextCompId)    
  }
  onPreviousClick(){
    this.practicalService.set_component_id(this.data.previousCompId)    
  }

}
