import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared";
import { DummyComponent } from "./components/dummy/dummy.component";
import { DummyRoutingModule } from "./dummy-routing.module";

@NgModule({
    imports: [
        SharedModule,
        DummyRoutingModule
    ],
    declarations: [
        DummyComponent
    ]
})

export class DummyModule {}