import { Injectable } from '@angular/core';
import { BasicPracticalItem } from '../practicals-generator/basic-practical-item';
import { ImgTextBtnComponent } from '../practical-components/img-text-btn/img-text-btn.component';

@Injectable({
  providedIn: 'root'
})
export class BasicPracticalComponentService {

  

  getPracticals() {
    return [
      new BasicPracticalItem(
        ImgTextBtnComponent,
        { id:0, img_url: 'https://media.gettyimages.com/photos/cell-culture-samples-picture-id460717055', img_size:'', text_p1: 'Brave as they come', text_p2: 'Brave as they come' , followingCompId:1, previousCompId:1}
      ),
      new BasicPracticalItem(
        ImgTextBtnComponent,
        {id:1, img_url: 'https://live.staticflickr.com/807/40379829875_8a7cc48b0f_b.jpg', img_size:'', text_p1: 'Brave as they come', text_p2: 'Brave as they come' , followingCompId:1, previousCompId:0}
      ),
    ];
  }

  constructor() { }
}
