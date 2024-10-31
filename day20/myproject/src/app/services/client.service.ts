import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  ServerUrl:string = "http://localhost:4000/client/";

  getClient()
  {
    return this.http.get(this.ServerUrl);
    // let prom = new Promise((Resolve:any, Reject:any)=>{
    //   this.http.get(this.ServerUrl).subscribe(data=>{
    //     // console.log("Client Service ", data);
    //     Resolve(data);
    //   })      
    // })       
    // return prom;
  }

  addClient(clientFormData:any)
  {
    return this.http.post(this.ServerUrl, clientFormData);
  }

  updateClient(clientFormData:any)
  {
    return this.http.put(this.ServerUrl + clientFormData.id, clientFormData);
  }
  deleteClient(clientId:number)
  {
    return this.http.delete(this.ServerUrl + clientId)
  }
}
