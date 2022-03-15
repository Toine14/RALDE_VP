import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';

@Component({
  selector: 'app-img-choices',
  templateUrl: './img-choices.component.html',
  styleUrls: ['./img-choices.component.scss']
})
export class ImgChoicesComponent implements OnInit {

  @Input() data: any;
 
 

  constructor(private practicalService: BasicPracticalComponentService) { }

  ngOnInit(): void {
    
  }





  onNextClick(id:any){
    this.practicalService.set_component_id(id)    
  }

 

}
