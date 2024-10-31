import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent implements OnInit {
  constructor(private userService : UserService) {}
userName:string = "";

ngOnInit(): void {
  
}

onSubmit(){
  this.userService.addUser(this.userName);
  // console.log("User added ", this.userName);
}
}
