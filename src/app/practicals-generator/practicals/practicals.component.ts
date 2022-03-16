import { Component, OnInit, OnDestroy,ViewChild, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';
import { BasicPracticalComponentDirective } from '../basic-practical-component.directive';
import { BasicPracticalItem } from '../basic-practical-item';
import { PracticalComponent } from '../pratical.component';

@Component({
  selector: 'app-practicals',
  templateUrl: './practicals.component.html',
  styleUrls: ['./practicals.component.scss']
})
export class PracticalsComponent implements OnInit, OnDestroy {

  @Input() practicalsComp: BasicPracticalItem[]=[]

  constructor(private practicalService: BasicPracticalComponentService) {
    //avant la subscription à 
   }

  @ViewChild(BasicPracticalComponentDirective, {static: true}) DynBasicPracticalComponent!: BasicPracticalComponentDirective;

  //public id_component =0;

  subscription!: Subscription;
  componentId!: number; 


  ngOnInit(): void {
    this.subscription = this.practicalService.$id_component.subscribe((id) => {this.componentId=id; this.loadComponent()});
    this.loadComponent()
  }



/*
*load the component in the ng template DynBasicPracticalComponent
*/
  loadComponent(){
    //const item = this.practicalsComp[this.componentId];


    const item = this.practicalsComp.filter(obj => {return obj.id === this.componentId})[0]
    const viewContainerRef = this.DynBasicPracticalComponent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<PracticalComponent>(item.component)
    componentRef.instance.data = item.data;

  }


  ngOnDestroy(): void {
    /* reset the actual id at 0 for the current vp in the service when the componenet is destroyed    
    */
    this.practicalService.set_component_id(0)

    this.subscription.unsubscribe();
    
  }

}
