import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CRUDTrabajadoresComponent } from './crudtrabajadores/crudtrabajadores.component';
import { NewtrabajadorComponent } from './newtrabajador/newtrabajador.component';



@NgModule({
  declarations: [
    CRUDTrabajadoresComponent,
    NewtrabajadorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecursosHumanosModule { }
