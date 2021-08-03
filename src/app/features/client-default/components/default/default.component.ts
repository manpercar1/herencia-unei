import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientBaseComponent } from 'src/app/shared';
import { ClientBaseService } from 'src/app/shared/services/client-base.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent extends ClientBaseComponent implements OnInit {

  clienteId = parseInt(this.activatedRouteDefault.snapshot.paramMap.get('id') as string);
  // public cliente$ : Observable<any> = this.service.getCliente(this.clienteId, localStorage.getItem('idTenant') as string)
  public cliente$ : Observable<any> = this.service.getCliente(this.clienteId)

  constructor(private activatedRouteDefault : ActivatedRoute, private routerDefault : Router,
     private service : ClientBaseService) {
    super(activatedRouteDefault, routerDefault)
  }

  ngOnInit(): void {
    console.log('componente default')
  }

}
