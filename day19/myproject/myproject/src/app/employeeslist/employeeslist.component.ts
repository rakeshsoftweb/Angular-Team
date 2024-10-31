import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employeeslist',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './employeeslist.component.html',
  styleUrl: './employeeslist.component.css'
})
export class EmployeeslistComponent {
  selectEmpId:any;
  Employees: any = [
    {
      id: 1, empname: "Rajesh Kumar", designation: "Developer", familyDet: [
        { fmname: "Sriya Singh", age: 26 },
        { fmname: "Raman Singh", age: 26 },
        { fmname: "Sunny Singh", age: 26 },
      ]
    },
    {
      id: 2, empname: "Rahul Kumar", designation: "Developer", familyDet: [
        { fmname: "Anita Singh", age: 29 }]
    },
    {
      id: 3, empname: "Manish Kumar", designation: "Developer", familyDet: [
        { fmname: "Kavita Singh", age: 25 }]
    },
    {
      id: 4, empname: "Sonam Singh", designation: "Developer", familyDet: [
        { fmname: "Neelam Singh", age: 26 }]
    }
  ]

  onFMDetails(SelEmpId:any)
  {
    this.selectEmpId = SelEmpId;
  }
}
