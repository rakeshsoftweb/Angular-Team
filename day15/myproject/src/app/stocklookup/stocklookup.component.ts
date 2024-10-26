import { Component, OnInit } from '@angular/core';
import { StocklookupService } from '../services/stocklookup.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-stocklookup',
  standalone: true,
  imports: [NgFor],
  templateUrl: './stocklookup.component.html',
  styleUrl: './stocklookup.component.css'
})
export class StocklookupComponent implements OnInit {
stockLookUpData:any;
constructor(private stockLookup : StocklookupService) {}
ngOnInit(): void {
  this.stockLookup.getStockLookup().subscribe(Response=>{
    console.log(Response);
    this.stockLookUpData = Response;
  })
}
}
