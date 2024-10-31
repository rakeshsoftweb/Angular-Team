import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedIn:any = new BehaviorSubject<any>(false);
  constructor() { }
}
