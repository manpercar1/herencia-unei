import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared";
import { CreRoutingModule } from "./cre-routing.module";
import { CreComponent } from "./components/cre/cre.component";
import { ListaCreComponent } from './components/lista-cre/lista-cre.component';

@NgModule({
    imports: [
        SharedModule,
        CreRoutingModule
    ],
    declarations: [
        CreComponent,
        ListaCreComponent
    ]
})

export class CreModule {}