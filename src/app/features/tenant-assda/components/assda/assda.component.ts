import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TenantBaseComponent } from 'src/app/shared';
import { ClientBaseService } from 'src/app/shared/services/tenant-base.service';

@Component({
  selector: 'app-assda',
  templateUrl: './assda.component.html',
  styleUrls: ['./assda.component.css', '../../../../shared/components/tenant-base/tenant-base.component.css']
})
export class AssdaComponent extends TenantBaseComponent implements OnInit {

  clienteId = parseInt(this.activatedRouteAssda.snapshot.paramMap.get('id') as string);
  public cliente$ : Observable<any> = this.service.getCliente(this.clienteId)

  constructor(private activatedRouteAssda : ActivatedRoute, private routerAssda : Router,
     private service : ClientBaseService) {
    super(activatedRouteAssda, routerAssda)
  }

  ngOnInit(): void {
  }

}
