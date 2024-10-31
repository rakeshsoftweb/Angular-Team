import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addfamilydet',
  standalone: true,
  imports: [],
  templateUrl: './addfamilydet.component.html',
  styleUrl: './addfamilydet.component.css'
})
export class AddfamilydetComponent {
@Input('EmpIdProp') EmpIdVal:any;
@Input('EmpNameProp') EmpNameVal:any;
@Output() eventFMName =  new EventEmitter<any>();

onAddFM(fmName:any,age:any)
{
  console.log("Family Details", fmName.value);
  this.eventFMName.emit({fmname:fmName.value,age:age.value});
}
}
