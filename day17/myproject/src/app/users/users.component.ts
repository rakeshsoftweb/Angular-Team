import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
// Users:any = ["Admin1","Admin2","Rajesh","Sriya","John"];

Users:any = [
  {id:1,userId:"Admin1",password:"adm@123",status:"active"},
  {id:2,userId:"Admin2",password:"adm@124",status:"active"},
  {id:3,userId:"Admin2",password:"adm@125",status:"disable"},
  {id:4,userId:"Admin3",password:"adm@126",status:"active"},
  {id:5,userId:"Admin5",password:"adm@127",status:"disable"}
];
}
