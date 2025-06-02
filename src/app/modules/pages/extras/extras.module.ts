import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtrasRoutingModule } from './extras-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  declarations: [
    VerifyCodeComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ExtrasRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
    exports: [
   VerifyCodeComponent
    ]
})
export class ExtrasModule { }
