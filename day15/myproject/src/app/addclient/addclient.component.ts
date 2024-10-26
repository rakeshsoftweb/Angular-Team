import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-addclient',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addclient.component.html',
  styleUrl: './addclient.component.css'
})
export class AddclientComponent implements OnInit {
  frmAddClient: any;
  msg:any="";
  constructor(private clientService : ClientService) { }

  ngOnInit(): void {
    this.frmAddClient = new FormGroup({
      "id": new FormControl(""),
      "clientname": new FormControl(""),
      "address": new FormControl(""),
      "city":new FormControl(""),
      "phone":new FormControl("")      
    })
  }

  onSubmit() {
    console.log(this.frmAddClient.value);
    this.clientService.addClient(this.frmAddClient.value).subscribe(Response=>{
      console.log("post Request ", Response);
      this.msg = "Client Added Successfully";
    })
  }
}
