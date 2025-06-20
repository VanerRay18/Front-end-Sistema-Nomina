import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CRUDTrabajadoresComponent } from './crudtrabajadores/crudtrabajadores.component';
import { NewtrabajadorComponent } from './newtrabajador/newtrabajador.component';
import { FormGroup } from '@angular/forms';

const routes: Routes = [
   {path: 'CRUD-Trabajadores', component: CRUDTrabajadoresComponent},
   {path: 'Nuevo-Trabajador', component: NewtrabajadorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursosHumanosRoutingModule { 
  
}
