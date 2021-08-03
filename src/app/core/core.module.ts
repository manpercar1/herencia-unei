import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthService } from "./services/auth.service";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        //Aquí se añaden los servicios singleton que se vayan a crear
        AuthService
    ]
})

export class CoreModule {}