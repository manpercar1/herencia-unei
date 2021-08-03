import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientBaseService } from 'src/app/shared/services/client-base.service';

@Component({
  selector: 'app-lista-cre',
  templateUrl: './lista-cre.component.html',
  styleUrls: ['./lista-cre.component.css', '../../../../shared/components/client-base/client-base.component.css']
})
export class ListaCreComponent implements OnInit {

  constructor(private service : ClientBaseService, private activatedRouteListaCre : ActivatedRoute) { }

  public clientesCre$ : Observable<any[]> = new Observable

  ngOnInit(): void {
    this.activatedRouteListaCre.data.subscribe(data => {
      console.log(data.idTenant)
      this.clientesCre$ = this.service.getAllClientes(data.idTenant)
    })
    console.log("lista cre")
    localStorage.setItem('idTenant', 'cre') //provisional mientras que no funcione el routing correctamente
  }

}
