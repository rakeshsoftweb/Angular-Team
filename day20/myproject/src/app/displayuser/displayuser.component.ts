import { Component } from '@angular/core';
import { AdduserComponent } from '../adduser/adduser.component';
import { NotifyuserComponent } from '../notifyuser/notifyuser.component';

@Component({
  selector: 'app-displayuser',
  standalone: true,
  imports: [AdduserComponent, NotifyuserComponent],
  templateUrl: './displayuser.component.html',
  styleUrl: './displayuser.component.css'
})
export class DisplayuserComponent {

}
