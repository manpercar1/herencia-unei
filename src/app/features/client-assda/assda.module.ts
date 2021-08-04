import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared";
import { AssdaComponent } from './components/assda/assda.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        AssdaComponent
  ]
})

export class AssdaModule {}