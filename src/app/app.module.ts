import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { AssdaModule } from './features/client-assda/assda.module';
import { CreModule } from './features/client-cre/cre.module';
import { DefaultModule } from './features/client-dummy/dummy.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './features/home/home.module';
import { ErrorModule } from './features/error/error.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AssdaModule,
    DefaultModule,
    CreModule,
    HomeModule,
    ErrorModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
