import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared";
import { CreComponent } from "./components/cre/cre.component";
import { CreRoutingModule } from "./cre-routing.module";

@NgModule({
    imports: [
        SharedModule,
        CreRoutingModule
    ],
    declarations: [
        CreComponent
    ]
})

export class CreModule {}