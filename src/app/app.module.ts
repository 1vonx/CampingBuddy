import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterAvailableComponent } from './components/filter-available/filter-available.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCampsComponent } from './components/filter-available/list-camps/list-camps.component';
import { CampCardComponent } from './components/filter-available/list-camps/camp-card/camp-card.component';
import { CampDetailComponent } from './components/filter-available/list-camps/camp-detail/camp-detail.component';
import {MatChipsModule} from '@angular/material/chips';
import { PriceValuePipe } from './price-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FilterAvailableComponent,
    ListCampsComponent,
    CampCardComponent,
    CampDetailComponent,
    PriceValuePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
