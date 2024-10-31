import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  constructor(private activateRoute : ActivatedRoute){}
  UserId:any;
  UserName:any;
  UserStatus:any;
  ngOnInit(): void {
    this.activateRoute.params.subscribe((param:Params)=>{
      this.UserId = param['uid'];
      this.UserName = param['uname'];  
      console.log("User Id ", this.UserId);
    })

    this.activateRoute.queryParams.subscribe((param: Params)=>{
      this.UserStatus = param['userStatus'];
    })
    
  }

}
