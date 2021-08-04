import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AssdaComponent } from './features/client-assda/components/assda/assda.component';
import { CreComponent } from './features/client-cre/components/cre/cre.component';
import { DummyComponent } from './features/client-dummy/components/dummy/dummy.component';
import { ErrorComponent } from './features/error/components/error/error.component';
import { HomeComponent } from './features/home/home/home.component';

const routesBase: Routes = [
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'home',
    component: HomeComponent //ESTA URL ES SOLO PARA PRUEBAS
  },
  {
    path: 'dummy',
    children: [
      {
        path: ':id',
        component: DummyComponent
      }
    ],
    data: { idTenant: 'tss' }
  },
  {
    path: 'assda',
    children: [
      {
        path: ':id',
        component: AssdaComponent
      }
    ],
    data: { idTenant: 'assda' }
  },
  {
    path: 'cre',
    children: [
      {
        path: ':id',
        component: CreComponent
      }
    ],
    data: { idTenant: 'cre' }
  },
  {
    path: '**',
    component: HomeComponent,
    data: { notFoundMessage: 'No se ha encontrado la URL solicitada, de forma que has sido redirigido a Home'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routesBase)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
