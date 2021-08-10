import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DummyComponent } from "./components/dummy/dummy.component";

const routesDummy : Routes = [
    //aquí se añaden las rutas
    {
        path: 'dummy',
        children: [
            {
                path: ':id',
                component: DummyComponent
            }
        ],
        data: { idTenant: 'tss'}
    }
]

@NgModule({
    imports: [RouterModule.forChild(routesDummy)],
    exports: [RouterModule]
})

export class DummyRoutingModule {}