import { Component } from '@angular/core';
import { AddfamilydetComponent } from '../addfamilydet/addfamilydet.component';

@Component({
  selector: 'app-addemployee',
  standalone: true,
  imports: [AddfamilydetComponent],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css'
})
export class AddemployeeComponent {
EmpId:number = 112345;
EmpName:string = "Alley Smith";
EmpFMName:string = "";
EmpFMAge:number = 0;
onFMNameUpdate(event:any)
{
  console.log("Employee -", event);
  this.EmpFMName = event.fmname;
  this.EmpFMAge = event.age;
}
}
