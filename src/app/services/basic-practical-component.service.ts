import { Injectable } from '@angular/core';
import { BasicPracticalItem } from '../practicals-generator/basic-practical-item';
import { ImgTextBtnComponent } from '../practical-components/img-text-btn/img-text-btn.component';
import { StartComponent } from '../practical-components/start/start.component';
import { ImageMarkerChoiceComponent } from '../practical-components/image-marker-choice/image-marker-choice.component'
import { ImgChoicesComponent } from '../practical-components/img-choices/img-choices.component';
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
        case 'ImgChoicesComponent':
          arrayBasicPractical.push(new BasicPracticalItem(ImgChoicesComponent, component.data))
          break;
      }



      console.log(component)
    }
    return arrayBasicPractical


  }


}
