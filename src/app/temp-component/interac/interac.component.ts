import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interac',
  templateUrl: './interac.component.html',
  styleUrls: ['./interac.component.scss']
})
export class InteracComponent implements OnInit {

  constructor() { }

@Input() data:any

  ngOnInit(): void {
  }

}
