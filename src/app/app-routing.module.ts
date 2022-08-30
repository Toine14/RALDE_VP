import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { PracticalListComponent } from './practical-list/practical-list.component';
import { PracticalsGeneratorComponent } from './practicals-generator/practicals-generator.component';
import { TempComponentComponent } from './temp-component/temp-component.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'practicals/:practicalid', component: PracticalListComponent },
  { path: 'practical', component: PracticalsGeneratorComponent },
  {path: 'temp', component: TempComponentComponent},
  {path: '404', component : PagenotfoundComponent},
  // otherwise redirect to home
  { path: '**',  redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
