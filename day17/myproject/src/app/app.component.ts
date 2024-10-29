import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UsersComponent } from './users/users.component';
import { Display1Component } from './display1/display1.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { StocklookupComponent } from './stocklookup/stocklookup.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { AddclientComponent } from './addclient/addclient.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';

// decorator pattern
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, 
    EmployeeComponent, UsersComponent, Display1Component, StocklistComponent, StocklookupComponent, 
    ClientlistComponent, AddclientComponent, AddemployeeComponent, EmployeeslistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myproject';
}
