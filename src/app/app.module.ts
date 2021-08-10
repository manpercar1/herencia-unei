import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { AssdaModule } from './features/tenant-assda/assda.module';
import { CreModule } from './features/tenant-cre/cre.module';
import { DummyModule } from './features/tenant-dummy/dummy.module';
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
    DummyModule,
    CreModule,
    HomeModule,
    ErrorModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
