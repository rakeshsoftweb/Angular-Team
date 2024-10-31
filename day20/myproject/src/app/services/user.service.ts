import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private uName:string= "";
  
  addUser(userName:string )
  {
    // console.log("User Service - User Added", userName);
    this.uName = userName;    
  }

  UserUpdate()
  {
    return new Observable(observer=>{
      observer.next(this.uName);
      observer.next("User added successfule");
      observer.next("User role is Admin");
      observer.complete();
      observer.next("Thanks for using Observable");
    })
  }
}
