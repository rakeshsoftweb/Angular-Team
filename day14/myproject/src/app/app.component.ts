import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UsersComponent } from './users/users.component';
import { Display1Component } from './display1/display1.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { StocklookupComponent } from './stocklookup/stocklookup.component';
// decorator pattern
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent, UsersComponent, Display1Component, StocklistComponent, StocklookupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myproject';
}
