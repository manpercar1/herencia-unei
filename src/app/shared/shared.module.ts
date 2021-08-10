import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ClientBaseService } from "./services/tenant-base.service";
import { TenantBaseComponent } from './components/tenant-base/tenant-base.component';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule
    ],
    declarations: [
        TenantBaseComponent
    ],
    exports: [
        HttpClientModule,
        CommonModule,
        TenantBaseComponent,
        RouterModule
    ],
    providers: [
        ClientBaseService
    ]
})

export class SharedModule {}