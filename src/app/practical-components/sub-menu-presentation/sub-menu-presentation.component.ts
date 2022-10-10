import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';

@Component({
  selector: 'app-sub-menu-presentation',
  templateUrl: './sub-menu-presentation.component.html',
  styleUrls: ['./sub-menu-presentation.component.scss'],
  styles: [`
  :host {
    min-width: 50%;
  }
`]

})
export class SubMenuPresentationComponent implements OnInit {

  @Input() data: any
 

  constructor(private practicalService: BasicPracticalComponentService) { }

  ngOnInit(): void {
  }

  onNextClick() {
    this.practicalService.set_component_id(this.data.nextCompId)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }

}
