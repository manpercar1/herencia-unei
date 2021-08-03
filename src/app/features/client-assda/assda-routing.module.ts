import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AssdaComponent } from "./components/assda/assda.component";
import { ListaAssdaComponent } from "./components/lista-assda/lista-assda.component";

const routesAssda : Routes = [
    //aquí se añaden las rutas
    {
        path: '',
        component: ListaAssdaComponent,
        data: {idTenant : 'assda'}
    },
    {
        path: ':id',
        component: AssdaComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routesAssda)],
    exports: [RouterModule]
})

export class AssdaRoutingModule {}