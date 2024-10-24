import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-stocklist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './stocklist.component.html',
  styleUrl: './stocklist.component.css'
})
export class StocklistComponent implements OnInit {

 constructor(private stockService : StockService) {}
 stockData:any;

  ngOnInit(): void {
    this.stockService.getStockList().subscribe(Response=>{
      this.stockData = Response;
      console.log("Component ", this.stockData);
    })
  }
}
