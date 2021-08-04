import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared";
import { CreComponent } from "./components/cre/cre.component";

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        CreComponent
    ]
})

export class CreModule {}