// frais.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FraisService {
  private apiUrl = 'http://gsbapi.geoffroy.etu.lmdsio.com/api/frais/listeFraisPeriode';

  constructor(private http: HttpClient) {}

  getListeFraisPeriode(idPeriode: number): Observable<any> {
    const url = `${this.apiUrl}/${idPeriode}`;
    return this.http.get(url);
  }
}
