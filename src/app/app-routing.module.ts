import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './features/error/components/error/error.component';
import { HomeComponent } from './features/home/home/home.component';

const routesBase: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routesBase)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
