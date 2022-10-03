import { Injectable } from '@angular/core';
import { BasicPracticalItem } from '../practicals-generator/basic-practical-item';
import { ImgTextBtnComponent } from '../practical-components/img-text-btn/img-text-btn.component';
import { StartComponent } from '../practical-components/start/start.component';
import { ImageMarkerChoiceComponent } from '../practical-components/image-marker-choice/image-marker-choice.component'
import { ImgChoicesComponent } from '../practical-components/img-choices/img-choices.component';
import { QuestionsComponent } from '../practical-components/questions/questions.component';
import { ImageMarkerInfosComponent } from '../practical-components/image-marker-infos/image-marker-infos.component';
import { QuestionImgComponent } from '../practical-components/question-img/question-img.component'
import { TransitionComponent } from '../practical-components/transition/transition.component';
import { MultipleChoicesComponent } from '../practical-components/multiple-choices/multiple-choices.component';
import { ReorderComponent } from '../practical-components/reorder/reorder.component';
import { ImgDragdropComponent } from '../practical-components/img-dragdrop/img-dragdrop.component';
import { MenuImgComponent } from '../practical-components/menu-img/menu-img.component';
import { VideoComponent } from '../practical-components/video/video.component';
import { InfoLinksComponent } from '../practical-components/info-links/info-links.component';


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
          arrayBasicPractical.push(new BasicPracticalItem(ImgTextBtnComponent, component.data, component.data.id))
          break;
        case 'StartComponent':
          arrayBasicPractical.push(new BasicPracticalItem(StartComponent, component.data, component.data.id))
          break;
        case 'ImageMarkerChoiceComponent':
          arrayBasicPractical.push(new BasicPracticalItem(ImageMarkerChoiceComponent, component.data, component.data.id))
          break;
        case 'ImgChoicesComponent':
          arrayBasicPractical.push(new BasicPracticalItem(ImgChoicesComponent, component.data, component.data.id))
          break;
        case 'QuestionsComponent':
          arrayBasicPractical.push(new BasicPracticalItem(QuestionsComponent, component.data, component.data.id))
          break;
        case 'ImageMarkerInfosComponent':
          arrayBasicPractical.push(new BasicPracticalItem(ImageMarkerInfosComponent, component.data, component.data.id))
          break;
        case 'QuestionImgComponent':
          arrayBasicPractical.push(new BasicPracticalItem(QuestionImgComponent, component.data, component.data.id))
          break;
        case 'TransitionComponent':
          arrayBasicPractical.push(new BasicPracticalItem(TransitionComponent, component.data, component.data.id))
          break;
        case 'MultipleChoicesComponent':
          arrayBasicPractical.push(new BasicPracticalItem(MultipleChoicesComponent, component.data, component.data.id))
          break;
        case 'ReorderComponent':
          arrayBasicPractical.push(new BasicPracticalItem(ReorderComponent, component.data, component.data.id))
          break;
        case 'ImgDragdropComponent':
          arrayBasicPractical.push(new BasicPracticalItem(ImgDragdropComponent, component.data, component.data.id))
          break;
        case 'MenuImgComponent':
          arrayBasicPractical.push(new BasicPracticalItem(MenuImgComponent, component.data, component.data.id))
          break;
        case 'VideoComponent':
          arrayBasicPractical.push(new BasicPracticalItem(VideoComponent, component.data, component.data.id))
          break;
        case 'InfoLinksComponent':
          arrayBasicPractical.push(new BasicPracticalItem(InfoLinksComponent, component.data, component.data.id))
          break;

      }



      //console.log(arrayBasicPractical)
    }
    return arrayBasicPractical


  }


}
