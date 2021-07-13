import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTERS } from './app.routes';
import { EmpresaModule } from './empresa/empresa.module';
import { ListarEmpresaComponent } from './listar-empresa/listar-empresa.component';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTERS),
    FormsModule,
    EmpresaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
