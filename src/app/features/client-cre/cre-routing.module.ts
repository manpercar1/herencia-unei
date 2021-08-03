import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreComponent } from "./components/cre/cre.component";
import { ListaCreComponent } from "./components/lista-cre/lista-cre.component";

const routesCre : Routes = [
    //aquí se añaden las rutas
    {
        path: '',
        component: ListaCreComponent,
        data: {idTenant : 'cre'}
    },
    {
        path: ':id',
        component: CreComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routesCre)],
    exports: [RouterModule]
})

export class CreRoutingModule {}