import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreComponent } from "./components/cre/cre.component";

const routesCre : Routes = [
    //aquí se añaden las rutas
    {
        path: 'cre',
        children: [
            {
                path: ':id',
                component: CreComponent
            }
        ],
        data: { idTenant: 'cre'}
    }
]

@NgModule({
    imports: [RouterModule.forChild(routesCre)],
    exports: [RouterModule]
})

export class CreRoutingModule {}