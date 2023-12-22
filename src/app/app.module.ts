// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ListeFraisComponent } from 'liste-frais/liste-frais.component';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routes} from "./app.routes";


@NgModule({
  declarations: [
    // LoginComponent
    ListeFraisComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginComponent,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
