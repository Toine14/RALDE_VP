import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from '../services/basic-practical-component.service';










@Component({
  selector: 'app-temp-component',
  templateUrl: './temp-component.component.html',
  styleUrls: ['./temp-component.component.scss'],
})
export class TempComponentComponent implements OnInit {
  @Input() data: any
  nb_lines!: number;



  tempdata = {
    "id": 1,
    "h2": "",
    "text_p1": "",
    "menu_items": [{ "title": "Exploring the cell culture lab ", "img_src": 'https://imgs.ralde.eu/lab_compressedx500.png', "nextCompId": 1 }, { "title": "Cells type & Medium", "img_src": 'https://imgs.ralde.eu/menu_cell.png', "nextCompId": 2 }, { "title": "Thawing and freezing the cells", "img_src": 'https://imgs.ralde.eu/to_froze_cells.png', "nextCompId": 3 }, { "title": "Subculturing the cells", "img_src": 'https://imgs.ralde.eu/under_hood.png', "nextCompId": 4 }]
    }


  constructor(private practicalService: BasicPracticalComponentService) {

  }


  ngOnInit(): void {
    this.data = this.tempdata



  }




  onNextClick(id:number) {
    this.practicalService.set_component_id(id)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }

















}
