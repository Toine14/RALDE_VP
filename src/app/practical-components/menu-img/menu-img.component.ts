import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';

@Component({
  selector: 'app-menu-img',
  templateUrl: './menu-img.component.html',
  styleUrls: ['./menu-img.component.scss']
})
export class MenuImgComponent implements OnInit {

  @Input() data: any


  constructor(private practicalService: BasicPracticalComponentService) { }

  ngOnInit(): void {
  }

  onNextClick(id: number) {
    this.practicalService.set_component_id(id)
  }

}
