import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientBaseService } from 'src/app/shared/services/client-base.service';

@Component({
  selector: 'app-lista-default',
  templateUrl: './lista-default.component.html',
  styleUrls: ['./lista-default.component.css', '../../../../shared/components/client-base/client-base.component.css']
})
export class ListaDefaultComponent implements OnInit {

  constructor(private service : ClientBaseService, private activatedRouteListaDefault : ActivatedRoute) { }

  public clientesDefault$ : Observable<any[]> = new Observable

  ngOnInit(): void {
    this.activatedRouteListaDefault.data.subscribe(data => {
      console.log(data.idTenant)
      this.clientesDefault$ = this.service.getAllClientes(data.idTenant)
    })
    console.log("lista tss")
    localStorage.setItem('idTenant', 'tss') //provisional mientras que no funcione el routing correctamente
  }

}
