import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[  ReactiveFormsModule,FormsModule]
})

export class Visiteur {
  public id_visiteur: number = 0;
  public nom_visiteur: string = "";
  public prenom_visiteur: string = "";
  public type_visiteur: string = "";
  public email: string = "";
  public password: string = "";

  constructor(json?: any) {
    this.id_visiteur = json.id_visiteur;
    this.nom_visiteur = json.nom_visiteur;
    this.prenom_visiteur = json.prenom_visiteur;
    this.type_visiteur = json.type_visiteur;
    this.email = json.email;
    this.password = json.password;
  }
}
export class LoginComponent {


  visiteur: Visiteur;
  access_token: string;
  token_type: string;

  constructor(json? : any) {
    if (json) {
      this.visiteur = json.visiteur;
      this.access_token = json.access_token;
      this.token_type =  json.token_type;
    }
    else {
      this.visiteur = new Visiteur();
      this.access_token = "";
      this.token_type = "";
    }
  }

  apiRequest() {
    this.visiteur.token_type(this.visiteur.value,this.p.value);
  }

}

