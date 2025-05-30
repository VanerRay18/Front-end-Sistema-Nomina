import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtrasRoutingModule } from './extras-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VerifyCodeComponent } from './verify-code/verify-code.component';



@NgModule({
  declarations: [
    VerifyCodeComponent
  ],
  imports: [
    CommonModule,
    ExtrasRoutingModule,
    ReactiveFormsModule
  ],
    exports: [
   VerifyCodeComponent
    ]
})
export class ExtrasModule { }
