import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared";
import { AssdaRoutingModule } from "./assda-routing.module";
import { AssdaComponent } from './components/assda/assda.component';

@NgModule({
    imports: [
        SharedModule,
        AssdaRoutingModule
    ],
    declarations: [
        AssdaComponent
  ]
})

export class AssdaModule {}