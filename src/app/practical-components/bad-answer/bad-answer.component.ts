import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bad-answer',
  templateUrl: './bad-answer.component.html',
  styleUrls: ['./bad-answer.component.scss']
})
export class BadAnswerComponent implements OnInit {

  @Input() data_bad_answer :any

  constructor() { }

  ngOnInit(): void {

    console.log(this.data_bad_answer)
  }

}
