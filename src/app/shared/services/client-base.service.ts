import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ClientBaseService {

  constructor(private http : HttpClient) { }

  private url: string = "http://127.0.0.1:8000/"
  
  // getCliente(cliente : number, tenant : string) : Observable<any> {
  //   return this.http.get<any>(this.url + "clientes/" + cliente + "/" + tenant)
  // }

  getCliente(cliente : number) : Observable<any> {
    return this.http.get<any>(this.url + "clientes/" + cliente)
  }

  getAllClientes(tenant : string) : Observable<any[]> {
    return this.http.get<any[]>(this.url + "clientes/" + tenant)
  }

}
