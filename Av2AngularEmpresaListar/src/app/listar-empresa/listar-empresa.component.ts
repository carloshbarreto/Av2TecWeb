import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { Empresa } from '../empresa/empresa.model';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html',
  styleUrls: ['./listar-empresa.component.css']
})
export class ListarEmpresaComponent implements OnInit {

  empresas : Empresa[];

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.empresas = this.listarEmpresas();
    this.empresas = [
      new Empresa(1, "Senac"),
      new Empresa(2, "B2W"),
      new Empresa(3, "Petrobras")
    ]

  }

  listarEmpresas(): Empresa[]{
    return this.empresaService.listarEmpresas();
  }

}
