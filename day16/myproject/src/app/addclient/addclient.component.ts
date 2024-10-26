import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-addclient',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './addclient.component.html',
  styleUrl: './addclient.component.css'
})
export class AddclientComponent implements OnInit {
  frmAddClient: any;
  msg: any = "";
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.frmAddClient = new FormGroup({
      "id": new FormControl("", [Validators.required, Validators.pattern('^[0-9]*$')]),
      "clientname": new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      "address": new FormControl(""),
      "city": new FormControl(""),
      "phone": new FormControl("", [Validators.required, Validators.pattern('^[0-9]*$')])
    })
  }

  onSubmit() {
    console.log(this.frmAddClient.value);
    console.log("form valid ", this.frmAddClient.valid);
    if (this.frmAddClient.valid) {
      this.clientService.addClient(this.frmAddClient.value).subscribe(Response => {
        console.log("post Request ", Response);
        this.msg = "Client Added Successfully";
      })
    }
    else {
      this.msg = "Client Form Invalid !";
    }

  }
}
