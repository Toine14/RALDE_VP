import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practical-list',
  templateUrl: './practical-list.component.html',
  styleUrls: ['./practical-list.component.scss']
})
export class PracticalListComponent implements OnInit {
  constructor(private dataservice : DataService, private router: Router) { }
  @ViewChild('detailsTemplate') detailsTemplateRef: TemplateRef<any> | undefined;


  public configuration!: Config;
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

  public vp = [{
    title: 'Animal cell culture intro',
    field: 'cellular biology',
    creator: 'RALDE team',
    description: 'full description of the cell culture virtual practical',
    id:1
  },
  {
    title: 'fish dissection',
    field: 'animal biology',
    creator: 'RALDE team',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore',
    id:2
  }];

  public isOneSelected: boolean = false;
  public placeHolderText: string ='Please Select a virtual practical in the bellow table'



  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.searchEnabled = true;
    this.configuration.selectRow = true;
    // ... etc.
    this.columns = [
      { key: 'title', title: 'Title' },
      { key: 'field', title: 'Field' },
      { key: 'creator', title: 'Creator' },
     //{ key: 'name', title: 'Name' },
      //{ key: 'isActive', title: 'STATUS' },
    ];
  }

  eventEmitted($event: { event: string; value: any }): void {
    this.isOneSelected=true;   
    this.placeHolderText=$event.value.row.description;
    let id = $event.value.row.id;
        this.dataservice.set_vp_id(id)   
      
  }

  onButtonClick(){
    this.router.navigate(['/practical']);

  }






}
