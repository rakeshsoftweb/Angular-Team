import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-notifyuser',
  standalone: true,
  imports: [NgFor],
  templateUrl: './notifyuser.component.html',
  styleUrl: './notifyuser.component.css'
})
export class NotifyuserComponent implements OnInit {
 constructor(private userService : UserService) {};
 UserValue :any = [];
  ngOnInit(): void {
    
  }

  onUpdateUser()
  {
    this.userService.UserUpdate().subscribe((value=>{
      console.log("Notify :", value);
      this.UserValue.push(value);
    }))
  }

}
