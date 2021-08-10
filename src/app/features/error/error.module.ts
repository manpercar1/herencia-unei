import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared";
import { ErrorRoutingModule } from "./error-routing.module";
import { ErrorComponent } from './components/error/error.component';

@NgModule({
    imports: [
        SharedModule,
        ErrorRoutingModule
    ],
    declarations: [
        ErrorComponent
    ]
})

export class ErrorModule {}