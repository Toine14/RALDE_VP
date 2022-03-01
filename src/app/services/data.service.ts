import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /*This part is for id selection of the VP, it is use to call the right VPs data from the server*/
  
  private vp_id_source = new BehaviorSubject<number>(0);
  
  vp_id$ = this.vp_id_source.asObservable();
  
/**
* use to set new value of selected VP
*/
 set_vp_id(id:number){   
    this.vp_id_source.next(id)
  }


  constructor() { }
}
