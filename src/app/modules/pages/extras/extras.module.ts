import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyCodeComponent } from './verify-code/verify-code.component';



@NgModule({
  declarations: [
    VerifyCodeComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
   VerifyCodeComponent
    ]
})
export class ExtrasModule { }
