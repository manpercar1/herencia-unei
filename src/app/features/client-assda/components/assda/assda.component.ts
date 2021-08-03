import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientBaseComponent } from 'src/app/shared';
import { ClientBaseService } from 'src/app/shared/services/client-base.service';

@Component({
  selector: 'app-assda',
  templateUrl: './assda.component.html',
  styleUrls: ['./assda.component.css', '../../../../shared/components/client-base/client-base.component.css']
})
export class AssdaComponent extends ClientBaseComponent implements OnInit {

  clienteId = parseInt(this.activatedRouteAssda.snapshot.paramMap.get('id') as string);
  // public cliente$ : Observable<any> = this.service.getCliente(this.clienteId, localStorage.getItem('idTenant') as string)
  public cliente$ : Observable<any> = this.service.getCliente(this.clienteId)


  constructor(private activatedRouteAssda : ActivatedRoute, private routerAssda : Router,
     private service : ClientBaseService) {
    super(activatedRouteAssda, routerAssda)
  }

  ngOnInit(): void {
    console.log("componente assda")
  }

}
