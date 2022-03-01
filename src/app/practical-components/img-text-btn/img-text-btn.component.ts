import { Component, Input, OnInit,Output, EventEmitter  } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-img-text-btn',
  templateUrl: './img-text-btn.component.html',
  styleUrls: ['./img-text-btn.component.scss']
})
export class ImgTextBtnComponent implements OnInit {

 

  @Input() data: any;

  next_clicked: Subject<number> = new Subject();

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

  onNextClick(){
    this.next_clicked.next(this.data.followingCompId)
    
  }

}
