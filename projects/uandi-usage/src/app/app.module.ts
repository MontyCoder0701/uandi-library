import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  ButtonComponent,
  CardComponent,
  DialogComponent,
  InputComponent,
} from 'uandi';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonComponent,
    InputComponent,
    CardComponent,
    DialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
