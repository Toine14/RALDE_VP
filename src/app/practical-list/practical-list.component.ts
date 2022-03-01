import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';

@Component({
  selector: 'app-practical-list',
  templateUrl: './practical-list.component.html',
  styleUrls: ['./practical-list.component.scss']
})
export class PracticalListComponent implements OnInit {
  constructor() { }
  @ViewChild('detailsTemplate') detailsTemplateRef: TemplateRef<any> | undefined;


  public configuration!: Config ;
  public columns!: Columns[];
  public clicked!: string;

  public data = [{
    phone: '+1 (934) 551-2224',
    age: 20,
    address: { street: 'North street', number: 12 },
    company: 'ZILLANET',
    name: 'Valentine Webb',
    isActive: false,
  }, {
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }];



  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.searchEnabled = true;
    this.configuration.selectRow = true;
    // ... etc.
    this.columns = [
      { key: 'phone', title: 'Phone' },
      { key: 'age', title: 'Age' },
      { key: 'company', title: 'Company' },
      { key: 'name', title: 'Name' },
      //{ key: 'isActive', title: 'STATUS' },
    ];
  }

  eventEmitted($event: { event: string; value: any }): void {
    console.log($event.value.row)
    this.clicked = JSON.stringify($event);
    // eslint-disable-next-line no-console
    console.log(this.clicked);
  }




}
