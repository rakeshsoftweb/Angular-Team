import { CurrencyPipe, DatePipe,  LowerCasePipe, NgFor, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { OrdstatusPipe } from '../pipes/ordstatus.pipe';
import { FormsModule } from '@angular/forms';
import { OrdfilterPipe } from '../pipes/ordfilter.pipe';

@Component({
  selector: 'app-bookorder',
  standalone: true,
  imports: [NgFor,OrdfilterPipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, DatePipe, OrdstatusPipe, FormsModule],
  templateUrl: './bookorder.component.html',
  styleUrl: './bookorder.component.css'
})
export class BookorderComponent {
textStr:string = "I am working on angular project";
billAmount:number = 5000;
tDate = new Date();
ordersData:any = [
  {orderNo:123,orderDate:"25-10-2024",clientname:"John",product:"Lenovo Laptop",qty:1,status:1},
  {orderNo:124,orderDate:"26-10-2024",clientname:"Alley",product:"Dell Laptop",qty:1,status:3},
  {orderNo:125,orderDate:"28-10-2024",clientname:"Oggona",product:"HP Laptop",qty:1, status:2},
  {orderNo:126,orderDate:"27-10-2024",clientname:"Rory",product:"Dell Laptop",qty:1, status:2},
  {orderNo:127,orderDate:"28-10-2024",clientname:"Anuj",product:"IBM Laptop",qty:1, status:2}
]
searchText:any;
}
