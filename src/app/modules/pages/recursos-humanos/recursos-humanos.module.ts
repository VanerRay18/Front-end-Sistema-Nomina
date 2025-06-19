import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CRUDTrabajadoresComponent } from './crudtrabajadores/crudtrabajadores.component';
import { NewtrabajadorComponent } from './newtrabajador/newtrabajador.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RecursosHumanosRoutingModule } from './recursos-humanos-routing.module';


@NgModule({
  declarations: [
    CRUDTrabajadoresComponent,
    NewtrabajadorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RecursosHumanosRoutingModule
  ]
})
export class RecursosHumanosModule { }
