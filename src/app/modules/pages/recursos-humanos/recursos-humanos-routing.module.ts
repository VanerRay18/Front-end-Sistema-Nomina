import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CRUDTrabajadoresComponent } from './crudtrabajadores/crudtrabajadores.component';

const routes: Routes = [
   {path: 'CRUD-Trabajadores', component: CRUDTrabajadoresComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursosHumanosRoutingModule { }
