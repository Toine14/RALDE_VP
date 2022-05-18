import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {

  constructor(private practicalService: BasicPracticalComponentService) { }
  @Input() data: any

  ngOnInit(): void {

    setTimeout(() => {
      this.onNextClick();
    }, 2500);

  }

  onNextClick() {
    this.practicalService.set_component_id(this.data.nextCompId)
  }

}
