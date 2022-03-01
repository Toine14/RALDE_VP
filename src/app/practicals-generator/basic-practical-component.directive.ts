import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[DynBasicPracticalComponent]'
})
export class BasicPracticalComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
