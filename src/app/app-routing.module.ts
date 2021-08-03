import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './features/error/components/error/error.component';

const routesBase: Routes = [
  {
    path: 'error/403',
    component: ErrorComponent
  },
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'tss',
    loadChildren: () => import('./features/client-default/default.module').then(m => m.DefaultModule),
    data: { idTenant: 'tss' }
  },
  {
    path: 'assda',
    loadChildren: () => import('./features/client-assda/assda.module').then(m => m.AssdaModule),
    data: { idTenant: 'assda' }
  },
  {
    path: 'cre',
    loadChildren: () => import('./features/client-cre/cre.module').then(m => m.CreModule),
    data: { idTenant: 'cre' }
  },
  {
    path: '**',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    data: { notFoundMessage: 'No se ha encontrado la URL solicitada, de forma que has sido redirigido a Home'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routesBase, {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
