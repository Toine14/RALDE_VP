import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {


  @Input() data : any;

  constructor(private practicalService : BasicPracticalComponentService) { }

  ngOnInit(): void {
  }

  onNextClick() {
    this.practicalService.set_component_id(this.data.nextCompId)
  }

  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }


}
