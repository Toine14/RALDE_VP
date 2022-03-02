import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  @Input() data: any;

  constructor(private practicalService : BasicPracticalComponentService) { }

  ngOnInit(): void {
  }

  onStartClick(){
    this.practicalService.set_component_id(this.data.followingCompId)    
  }

}
