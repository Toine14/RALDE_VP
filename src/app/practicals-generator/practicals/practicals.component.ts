import { Component, OnInit, OnDestroy,ViewChild, Input } from '@angular/core';
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

  constructor() { }

  @ViewChild(BasicPracticalComponentDirective, {static: true}) DynBasicPracticalComponent!: BasicPracticalComponentDirective;

  public id_component =0;


  ngOnInit(): void {
    this.loadComponent()
  }




  loadComponent(){
    const adItem = this.practicalsComp[this.id_component];
    console.log(adItem)
    const viewContainerRef = this.DynBasicPracticalComponent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<PracticalComponent>(adItem.component)
    componentRef.instance.data = adItem.data;

  }


  ngOnDestroy(): void {
    console.log('destroy');
  }

}
