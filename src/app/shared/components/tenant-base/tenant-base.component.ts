import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-base',
  templateUrl: './tenant-base.component.html',
  styleUrls: ['./tenant-base.component.css']
})
export class TenantBaseComponent implements OnInit {

  @Input() cliente$ : Observable<any> = new Observable

  public idTenant : string = ""

  constructor(private activatedRouteBase : ActivatedRoute, private routerBase : Router) { }

  ngOnInit(): void {
    this.activatedRouteBase.data.subscribe(data => this.idTenant = data.idTenant)
    if(localStorage.getItem('idTenant') != this.idTenant){
      this.routerBase.navigate(['error/403'])
    }
  }

}
