import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {ProfileService} from './profile.service';
import {RepoFilterPipe} from '../../../../../../Users/Shivani Jain/Desktop/get-github-repo/src/app/profile/repofilter.pipe';
import {NgxPaginationModule} from'ngx-pagination';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepoFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,  
    NgxPaginationModule

  ],
  providers: [ProfileService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
