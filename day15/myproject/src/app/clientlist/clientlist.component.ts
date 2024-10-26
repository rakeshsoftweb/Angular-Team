import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-clientlist',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './clientlist.component.html',
  styleUrl: './clientlist.component.css'
})
export class ClientlistComponent implements OnInit {
  constructor(private clientService: ClientService) {}
  clientData:any;
  deleteId:number = 0;
  msg:string="";
  ngOnInit(): void {
    this.onLoadData();
  }

  onLoadData()
  {
    this.clientService.getClient().subscribe(Response=>{
      this.clientData = Response;
      console.log(Response);
    })
  }

  onDelete(clientId:any)
  {
    this.deleteId = clientId;
    this.msg = "";
  }

  onDeleteYes()
  {    
    this.clientService.deleteClient(this.deleteId).subscribe(Response=>{
      this.deleteId = 0;
      this.msg = "Entry deleted successfully";
      console.log(Response);
      this.onLoadData();
    })
    
  }
  onDeleteNo()
  {
    this.deleteId = 0;
    this.msg = "Delete action aborted";
  }

}
