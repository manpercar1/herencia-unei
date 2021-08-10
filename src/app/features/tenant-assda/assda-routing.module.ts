import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AssdaComponent } from "./components/assda/assda.component";

const routesAssda : Routes = [
    //aquí se añaden las rutas
    {
        path: 'assda',
        children: [
            {
                path: ':id',
                component: AssdaComponent,
            }
        ],
        data: { idTenant: 'assda' }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routesAssda)],
    exports: [RouterModule]
})

export class AssdaRoutingModule {}