import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routesHome : Routes = [
    //aquí se añaden las rutas
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routesHome)],
    exports: [RouterModule]
})

export class HomeRoutingModule {}