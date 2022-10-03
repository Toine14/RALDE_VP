import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-links',
  templateUrl: './info-links.component.html',
  styleUrls: ['./info-links.component.scss']
})
export class InfoLinksComponent implements OnInit {

  @Input() data : any;

  constructor() { }

  ngOnInit(): void {
  }

}
