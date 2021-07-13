import {Routes} from "@angular/router"
import { ListarEmpresaComponent } from "./listar-empresa/listar-empresa.component"


export const ROUTERS: Routes = [
    {
        path: 'empresas/listar',
        component: ListarEmpresaComponent
      },
      {
        path: 'empresas',
        redirectTo: 'empresas/listar'
      },
      {
        path: '',
        redirectTo: 'empresas/listar',
        pathMatch: 'full'
      }


]


