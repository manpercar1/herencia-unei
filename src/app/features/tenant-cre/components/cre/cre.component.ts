import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TenantBaseComponent } from 'src/app/shared';
import { ClientBaseService } from 'src/app/shared/services/tenant-base.service';

@Component({
  selector: 'app-cre',
  templateUrl: './cre.component.html',
  styleUrls: ['./cre.component.css', '../../../../shared/components/tenant-base/tenant-base.component.css']
})
export class CreComponent extends TenantBaseComponent implements OnInit {

  clienteId = parseInt(this.activatedRouteCre.snapshot.paramMap.get('id') as string);
  public cliente$ : Observable<any> = this.service.getCliente(this.clienteId)

  constructor(private activatedRouteCre : ActivatedRoute, private routerCre : Router,
     private service : ClientBaseService) {
    super(activatedRouteCre, routerCre)
  }

  ngOnInit(): void {
  }

}
