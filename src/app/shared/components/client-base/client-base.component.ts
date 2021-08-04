import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-base',
  templateUrl: './client-base.component.html',
  styleUrls: ['./client-base.component.css']
})
export class ClientBaseComponent implements OnInit {

  @Input() cliente$ : Observable<any> = new Observable

  public idTenant : string = ""

  constructor(private activatedRouteBase : ActivatedRoute, private routerBase : Router) { }

  ngOnInit(): void {
    this.activatedRouteBase.data.subscribe(data => this.idTenant = data.idTenant)
    console.log("Tenant logueado: " + localStorage.getItem('idTenant'))
    console.log("Tenant de la url: " + this.idTenant)
    if(localStorage.getItem('idTenant') != this.idTenant){
     
      this.routerBase.navigate(['error'])
      
      //INVESTIGAR SOBRE COMO FUNCIONA PATH
      //INVESTIGAR SOBRE COMO BORRAR 'TARGET', O SI HAY UN 'TARGET'
    }
  }

}
