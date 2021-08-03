import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientBaseComponent } from 'src/app/shared';
import { ClientBaseService } from 'src/app/shared/services/client-base.service';

@Component({
  selector: 'app-cre',
  templateUrl: './cre.component.html',
  styleUrls: ['./cre.component.css', '../../../../shared/components/client-base/client-base.component.css']
})
export class CreComponent extends ClientBaseComponent implements OnInit {

  clienteId = parseInt(this.activatedRouteCre.snapshot.paramMap.get('id') as string);
  // public cliente$ : Observable<any> = this.service.getCliente(this.clienteId, localStorage.getItem('idTenant') as string)
  public cliente$ : Observable<any> = this.service.getCliente(this.clienteId)

  constructor(private activatedRouteCre : ActivatedRoute, private routerCre : Router,
     private service : ClientBaseService) {
    super(activatedRouteCre, routerCre)
  }

  ngOnInit(): void {
    console.log("componente cre")
  }

}
