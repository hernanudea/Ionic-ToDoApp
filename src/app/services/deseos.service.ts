import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    const lista1 = new Lista('Recolectar Piebras del Infinito');
    const lista2 = new Lista('Heroes a Desaparecer');

    this.listas.push(lista1, lista2);
    console.log(this.listas);
  }
}