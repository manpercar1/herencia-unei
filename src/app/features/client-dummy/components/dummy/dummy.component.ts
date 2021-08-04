import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientBaseComponent } from 'src/app/shared';
import { ClientBaseService } from 'src/app/shared/services/client-base.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent extends ClientBaseComponent implements OnInit {

  clienteId = parseInt(this.activatedRouteDummy.snapshot.paramMap.get('id') as string);
  public cliente$ : Observable<any> = this.service.getCliente(this.clienteId)

  constructor(private activatedRouteDummy : ActivatedRoute, private routerDummy : Router,
     private service : ClientBaseService) {
    super(activatedRouteDummy, routerDummy)
  }

  ngOnInit(): void {
    console.log('componente dummy')
  }

}