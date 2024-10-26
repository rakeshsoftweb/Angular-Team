import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-clientlist',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './clientlist.component.html',
  styleUrl: './clientlist.component.css'
})
export class ClientlistComponent implements OnInit {
  constructor(private clientService: ClientService) {}
  clientData:any;
  deleteId:number = 0;
  msg:string="";
  editId:number = 0;


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
  onEdit(rowClient:any)
  {
    this.editId = rowClient.id;
    // console.log(rowClient);
  }

  onUpdate(clientid:any, clientname:any, address:any, city:any, phone:any)
  {
    // console.log(clientid.value, clientname.value,address.value,city.value,phone.value);
    const clientData = {id:clientid.value, clientname:clientname.value,address: address.value,city:city.value,phone:phone.value}
    // console.log(clientData);
    this.clientService.updateClient(clientData).subscribe(Response=>{
      this.msg = "Client Updated";
      this.onLoadData();
      this.editId = 0;
    })
    
  }

  onDiscard()
  {
    this.editId =0;
  }

}
