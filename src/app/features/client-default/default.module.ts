import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared";
import { DefaultRoutingModule } from "./default-routing.module";
import { DefaultComponent } from "./components/default/default.component";
import { ListaDefaultComponent } from './components/lista-default/lista-default.component';

@NgModule({
    imports: [
        SharedModule,
        DefaultRoutingModule
    ],
    declarations: [
        DefaultComponent,
        ListaDefaultComponent
    ]
})

export class DefaultModule {}