import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaService } from '../empresa.service';
import { ListarEmpresaComponent } from '../listar-empresa/listar-empresa.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListarEmpresaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    EmpresaService   

  ]
})
export class EmpresaModule { }
