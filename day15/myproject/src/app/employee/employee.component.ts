import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

// fullName:string = "John Smith";
fullName:any = {firstName:"John", lastName:"Smith"};
age:number = 23;
empStatus:boolean = true;

Skills:any = ["HTML","CSS","JavaScript"];

// define functon in angular class
onClickHandler()
{
  console.log("Employee Status ", this.empStatus);
  this.empStatus = !this.empStatus;
  console.log("Employee Status ", this.empStatus);
}
}