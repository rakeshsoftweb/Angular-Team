import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StocklookupService {

  constructor(private http : HttpClient) { }

  getStockLookup()
  {
    return this.http.get("http://endeavourtech.ddns.net:8095/stockanalytics/stocks/sectorLookup")
  }

}
