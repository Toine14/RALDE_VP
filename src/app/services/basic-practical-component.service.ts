import { Injectable } from '@angular/core';
import { BasicPracticalItem } from '../practicals-generator/basic-practical-item';
import { ImgTextBtnComponent } from '../practical-components/img-text-btn/img-text-btn.component';
import { StartComponent } from '../practical-components/start/start.component';
import { ImageMarkerChoiceComponent } from '../practical-components/image-marker-choice/image-marker-choice.component'
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicPracticalComponentService {

  constructor(protected httpClient: HttpClient) { }

  private id_component = new BehaviorSubject<number>(0);
  $id_component = this.id_component.asObservable();


  set_component_id(id: number) {
    this.id_component.next(id)
  }


  get_practical_data(url: string) {
    //return this.http.post(`${environment.apiUrl}/user/`, user);
    return this.httpClient.get(url)
  }




  getPracticals(data: any): BasicPracticalItem[] {
    let stringyfied = JSON.stringify(data);
    let jsonified = JSON.parse(stringyfied);
    let arrayBasicPractical: BasicPracticalItem[] = []
    //console.log('voici les datas du service')
    //console.log(jsonified)
    for (let component of jsonified.components) {
      switch (component.component_type) {
        case 'ImgTextBtnComponent':
          arrayBasicPractical.push(new BasicPracticalItem(ImgTextBtnComponent, component.data))
          break;
        case 'QuestionComponent':
          break;
        case 'StartComponent':
          arrayBasicPractical.push(new BasicPracticalItem(StartComponent, component.data))
          break;
        case 'ImageMarkerChoiceComponent':
          arrayBasicPractical.push(new BasicPracticalItem(ImageMarkerChoiceComponent, component.data))
          break;
      }



      console.log(component)
    }
    return arrayBasicPractical

    /*     return [
          new BasicPracticalItem(
            ImgTextBtnComponent,
            { id:0, img_url: 'https://media.gettyimages.com/photos/cell-culture-samples-picture-id460717055', img_size:'', text_p1: 'This is the first component of the virtual practical', text_p2:'this component consists only of an image and two paragraphs of text', followingCompId:1, previousCompId:1}
          ),
          new BasicPracticalItem(
            ImgTextBtnComponent,
            {id:1, img_url: 'https://live.staticflickr.com/807/40379829875_8a7cc48b0f_b.jpg', img_size:'', text_p1: 'this is the second component of the virtual practical', text_p2: 'nothing...' , followingCompId:1, previousCompId:0}
          ),
        ]; */
  }


}
