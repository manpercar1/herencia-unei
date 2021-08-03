import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientBaseService } from 'src/app/shared/services/client-base.service';

@Component({
  selector: 'app-lista-assda',
  templateUrl: './lista-assda.component.html',
  styleUrls: ['./lista-assda.component.css', '../../../../shared/components/client-base/client-base.component.css']
})
export class ListaAssdaComponent implements OnInit {

  constructor(private service : ClientBaseService, private activatedRouteListaAssda : ActivatedRoute) { }

  public clientesAssda$ : Observable<any[]> = new Observable

  ngOnInit(): void {
    this.activatedRouteListaAssda.data.subscribe(data => {
      this.clientesAssda$ = this.service.getAllClientes(data.idTenant)
    })
    console.log("lista assda")
    localStorage.setItem('idTenant', 'assda') //provisional mientras que no funcione el routing correctamente
  }

}
