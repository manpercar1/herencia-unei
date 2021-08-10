import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "./components/error/error.component";

const routesError : Routes = [
    //aquí se añaden las rutas
    {
        path: 'error',
        children: [
            {
                path: '403',
                component: ErrorComponent,
                data: { errorCode: 'HTTP 403' , message: 'Forbidden'}
            },
            {
                path: '404',
                component: ErrorComponent,
                data: { errorCode: 'HTTP 404', message: 'Not found'}
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'error/404'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routesError)],
    exports: [RouterModule]
})

export class ErrorRoutingModule {}