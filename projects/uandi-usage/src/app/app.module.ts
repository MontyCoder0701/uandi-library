import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UandiModule } from '../../../uandi/src/lib/uandi.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UandiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
