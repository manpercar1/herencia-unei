import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultComponent } from "./components/default/default.component";
import { ListaDefaultComponent } from "./components/lista-default/lista-default.component";

const routesDefault : Routes = [
    //aquí se añaden las rutas
    {
        path: '',
        component: ListaDefaultComponent,
        data: {idTenant : 'tss'}
    },
    {
        path: ':id',
        component: DefaultComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routesDefault)],
    exports: [RouterModule]
})

export class DefaultRoutingModule {}