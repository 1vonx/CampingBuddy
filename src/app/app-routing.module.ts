import { ListCampsComponent } from './components/filter-available/list-camps/list-camps.component';
import { HomeComponent } from './components/home/home.component';
import { FilterAvailableComponent } from './components/filter-available/filter-available.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list-camps', component: ListCampsComponent },
  { path: 'filter', component: FilterAvailableComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
