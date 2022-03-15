import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';

@Component({
  selector: 'app-temp-component',
  templateUrl: './temp-component.component.html',
  styleUrls: ['./temp-component.component.scss']
})
export class TempComponentComponent implements OnInit {

  @Input() data: any;
 
 

  constructor(private practicalService: BasicPracticalComponentService) { }

  ngOnInit(): void {
    this.data = this.temp_data
  }


  temp_data: any = {
    "id": 1,
    "choices" :[{"NextCompId":1,"img_url": "assets/img/adherent_cell.jpg","title": "Adherent cells","imgText":"Adherent cells are cells which must be attached to a surface to grow. They are commonly used in laboratory environments. The origin of this type of cells is usually solid tissues"},
    {"NextCompId":2,"img_url": "assets/img/susp_cell.jpg","title": "Cells in suspension","imgText":"A cell suspension or suspension culture is a type of cell culture in which single cells or small aggregates of cells are allowed to function and multiply in an agitated growth medium, thus forming a suspension. This type of cells is usually originate from blood.",}],
    
    "btn1CompId": 1,
    "text_p1": "What type of cell do you want to start with?",    
    "followingCompId": 2,
    "previousCompId": 0
  }


  onNextClick(){
    this.practicalService.set_component_id(this.data.followingCompId)    
  }
  onPreviousClick(){
    this.practicalService.set_component_id(this.data.previousCompId)    
  }
 

}
