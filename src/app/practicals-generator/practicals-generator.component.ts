import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasicPracticalComponentService } from '../services/basic-practical-component.service';
import { DataService } from '../services/data.service';
import { BasicPracticalItem } from './basic-practical-item'

@Component({
  selector: 'app-practicals-generator',
  templateUrl: './practicals-generator.component.html',
  styleUrls: ['./practicals-generator.component.scss']
})
export class PracticalsGeneratorComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  Vp_id!: number;

  loading:Boolean =true

  constructor(private dataService: DataService, private practicalService: BasicPracticalComponentService) {
    this.subscription = dataService.vp_id$.subscribe((id) => { this.Vp_id = id })
  }

  practicalsComp: BasicPracticalItem[] = []


  ngOnInit(): void {
    
    //TODO get the right URL
    let url = '/assets/data/first_vp.json';
    this.practicalService.get_practical_data(url).subscribe((data:any)=>{ this.practicalsComp = this.practicalService.getPracticals(data);this.loading=false});
    //this.practicalsComp = this.practicalService.getPracticals();

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}