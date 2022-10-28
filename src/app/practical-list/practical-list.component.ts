import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-practical-list',
  templateUrl: './practical-list.component.html',
  styleUrls: ['./practical-list.component.scss']
})
export class PracticalListComponent implements OnInit {
  constructor(private dataservice : DataService, private router: Router, private route: ActivatedRoute) { }
  @ViewChild('detailsTemplate') detailsTemplateRef: TemplateRef<any> | undefined;


  public configuration!: Config;
  public columns!: Columns[];
  public clicked!: string;


  public vp = [{
    title: 'Animal cell culture intro (old version)',
    field: 'cellular biology',
    creator: 'RALDE team',
    description: 'In this virtual tp we will explore the different steps required to grow a mammalian cell strain',
    id:1
  },
  {
    title: 'Animal cell culture intro (new version)',
    field: 'cellular biology',
    creator: 'RALDE team',
    description: 'In this virtual tp we will explore the different steps required to grow a mammalian cell strain',
    id:2
  },
 {
    title: 'dissection',
    field: 'animal biology',
    creator: 'RALDE team',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore',
    id:3
  }
];

  public phys_vp=[];
  public chem_vp=[];

  public table_data!:any;

  public isOneSelected: boolean = false;
  public placeHolderText: string ='Please Select a virtual practical in the bellow table'

  vp_categories_id! :number;

  ngOnInit(): void {

    var route_id= this.route.snapshot.paramMap.get('practicalid');
    this.vp_categories_id= Number(route_id)

    switch (this.vp_categories_id) {
      case 1:
        this.table_data = this.vp
        break;
      case 2:
        this.table_data = this.phys_vp
        break;
      case 3:
        this.table_data=this.chem_vp
        break;
      default:
        this.table_data=this.vp} 
      


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
