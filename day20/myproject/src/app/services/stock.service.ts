import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http : HttpClient) { }

  getStockList()
  {
    return this.http.get("http://endeavourtech.ddns.net:8095/stockanalytics/stocks/singleStockPriceHistory/AMD?fromDate=2023-03-23&toDate=2023-04-30&sortField=ClosePrice&sortDirection=asc")
  }
}
