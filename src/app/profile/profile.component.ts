import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
//import {ProfileService} from './profile.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile ;
  repos ;
  searchTerm: string;
  totalRecords: string;
  page: number=1;
  username: string;
  


  constructor(private profileservice: ProfileService) {
    this.profileservice.getprofileinfo().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
    });

      this.profileservice.getprofilerepos().subscribe(repos =>{
        console.log(repos);
        this.repos= repos;

      });

      
   }

   findprofile(){
     this.profileservice.updateprofile(this.username);
     this.profileservice.getprofileinfo().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
    });

      this.profileservice.getprofilerepos().subscribe(repos =>{
        console.log(repos);
        this.repos= repos;

      });
    }

  ngOnInit(): void {
  }

}
