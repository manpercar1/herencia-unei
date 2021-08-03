import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ClientBaseService } from "./services/client-base.service";
import { ClientBaseComponent } from './components/client-base/client-base.component';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule
    ],
    declarations: [
        ClientBaseComponent
    ],
    exports: [
        HttpClientModule,
        CommonModule,
        ClientBaseComponent,
        RouterModule
    ],
    providers: [
        ClientBaseService
    ]
})

export class SharedModule {}