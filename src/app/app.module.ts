import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableModule } from 'ngx-easy-table';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { CardsComponent } from './categories/cards/cards.component';
import { PracticalListComponent } from './practical-list/practical-list.component';
import { PracticalsGeneratorComponent } from './practicals-generator/practicals-generator.component';
import { BasicPracticalComponentDirective } from './practicals-generator/basic-practical-component.directive';
import { PracticalsComponent } from './practicals-generator/practicals/practicals.component';
import { RestartComponent } from './practical-components/restart/restart.component';
import { QuestionComponent } from './practical-components/question/question.component';
import { StartComponent } from './practical-components/start/start.component';
import { TempComponentComponent } from './temp-component/temp-component.component';
import { InteracComponent } from './temp-component/interac/interac.component';
import { ImageMarkerChoiceComponent } from './practical-components/image-marker-choice/image-marker-choice.component';
import { ImgChoicesComponent } from './practical-components/img-choices/img-choices.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    CardsComponent,
    PracticalListComponent,
    PracticalsGeneratorComponent,
    BasicPracticalComponentDirective,
    PracticalsComponent,
    RestartComponent,
    QuestionComponent,
    StartComponent,
    TempComponentComponent,
    InteracComponent,
    ImageMarkerChoiceComponent,
    ImgChoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
