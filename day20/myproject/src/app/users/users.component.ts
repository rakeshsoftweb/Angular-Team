import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, RouterOutlet, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
// Users:any = ["Admin1","Admin2","Rajesh","Sriya","John"];

Users:any = [
  {id:1,userId:"Admin1",password:"adm@123",status:"active"},
  {id:2,userId:"Rajesh",password:"adm@124",status:"active"},
  {id:3,userId:"Sonam",password:"adm@125",status:"disable"},
  {id:4,userId:"Kunal",password:"adm@126",status:"active"},
  {id:5,userId:"Aman",password:"adm@127",status:"disable"}
];
}
