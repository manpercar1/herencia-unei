import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared";
import { DummyComponent } from "./components/dummy/dummy.component";

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        DummyComponent
    ]
})

export class DefaultModule {}