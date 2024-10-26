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
  }

  addClient(clientFormData:any)
  {
    return this.http.post(this.ServerUrl, clientFormData);
  }
  deleteClient(clientId:number)
  {
    return this.http.delete(this.ServerUrl + clientId)
  }
}
