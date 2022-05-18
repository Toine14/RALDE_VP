import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BasicPracticalItem } from 'src/app/practicals-generator/basic-practical-item';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';

@Component({
  selector: 'app-nav-dev',
  templateUrl: './nav-dev.component.html',
  styleUrls: ['./nav-dev.component.scss']
})
export class NavDevComponent implements OnInit {
  @Input() practicalsComp: BasicPracticalItem[]=[];

  componentForm!:FormGroup;
  

  constructor(private practicalService : BasicPracticalComponentService, private fb:FormBuilder) { }

  ngOnInit(): void {
    
    this.componentForm = this.fb.group({
      "component": [null]
    });
   
  }

  submit() {

    let val = this.componentForm.value.component   
    this.practicalService.set_component_id(val)
  }

}
