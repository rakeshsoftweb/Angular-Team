import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-display1',
  standalone: true,
  imports: [NgIf],
  templateUrl: './display1.component.html',
  styleUrl: './display1.component.css'
})
export class Display1Component {
productcreated:boolean = false;
msgText = "Please create product";
onCreateProduct()
{
  this.productcreated = true;
  // this.productcreated = !this.productcreated;
  // this.msgText = "Product created successfully";
}
}
