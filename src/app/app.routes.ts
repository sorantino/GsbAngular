// app.routes.ts

import { ListeFraisComponent } from "./frais/liste-frais/liste-frais.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import {Routes} from "@angular/router";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'frais/liste', component: ListeFraisComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
