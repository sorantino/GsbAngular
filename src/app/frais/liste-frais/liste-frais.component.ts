// liste-frais.component.ts

import { Component, OnInit } from '@angular/core';
import { FraisService } from '../services/frais.service';

@Component({
  selector: 'app-liste-frais',
  templateUrl: './liste-frais.component.html',
  styleUrls: ['./liste-frais.component.css']
})
export class ListeFraisComponent implements OnInit {
  listeFrais: any[] = [];

  constructor(private fraisService: FraisService) {}

  ngOnInit() {
    this.loadListeFrais();
  }

  loadListeFrais() {
    this.fraisService.getListeFraisPeriode(1) // Remplacez 1 par l'id de la période souhaitée
      .subscribe(
        data => {
          this.listeFrais = data;
        },
        error => {
          console.error('Erreur lors de la récupération des frais:', error);
        }
      );
  }
}
