import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ]
})

export class HomeModule {}