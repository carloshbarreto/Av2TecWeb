import { Injectable } from '@angular/core';
import { Empresa } from './empresa/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor() { }

  listarEmpresas() : Empresa[]{
    const empresas = localStorage['empresas'];
    return empresas ? JSON.parse(empresas) : [];
  }

}
