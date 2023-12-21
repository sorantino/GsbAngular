// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/geoffroy/ProjetWSGsb/public/api/login';
  private loggedIn = false;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  setLoggedIn(status: boolean) {
    this.loggedIn = status;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
