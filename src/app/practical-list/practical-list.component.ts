import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-practical-list',
  templateUrl: './practical-list.component.html',
  styleUrls: ['./practical-list.component.scss']
})
export class PracticalListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columnDefs: ColDef[] = [
    { field: 'subject' },    
    { field: 'field' },
    { field: 'creator' },
  ];

  rowData = [
    { subject: 'general dissection of a mice', field: 'animal biology', creator: 'RALDE team' },
    { subject: 'dissection of fish gills', field: 'animal biology', creator: 'RALDE team' },
    { subject: 'cell culture', field: 'cellular biology', creator: 'RALDE team' },
  ];

}
