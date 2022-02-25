import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { PracticalListComponent } from './practical-list/practical-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'categories', component: CategoriesComponent},
  {path:'practicals/:practicalid', component: PracticalListComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
