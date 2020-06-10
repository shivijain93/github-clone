import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid ='e77ded1bff784a01effd';
  private clientsecret = 'f64c5a94208550cbd0c7f6d772df47a262a6ad0f';
  
  


  constructor(private http:HttpClient) {
    console.log("service is now ready");
    this.username= 'shivijain93';
    
   }

   getprofileinfo()  {
     return this.http.get("https://api.github.com/users/" + this.username  + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret )
    //.map(res => res.json());
    }

    getprofilerepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret )
      //.map(res => res.json());
    }

    updateprofile(username:string){
      this.username = username;
    }

}
