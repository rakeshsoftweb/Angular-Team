import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private router : Router, private loginService : LoginService) {

  }
  frmLogin:any;
  msg:string= "";
  ngOnInit(): void {
    this.frmLogin =  new FormGroup({
      userId: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }

  onSubmit()
  {
    const {userId, password } = this.frmLogin.value;
    if(userId ==="admin" && password ==="123")
    {
      this.loginService.loggedIn.next(true);
      sessionStorage.setItem("logUser","true");
      this.router.navigate(['/dashboard']);
    }
    else {
      this.msg = "Invalid User Id/Password";
    }
    console.log(this.frmLogin.value);
  }
}
