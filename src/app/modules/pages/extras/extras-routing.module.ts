import { NgModule } from '@angular/core';
import { PerfilComponent } from './perfil/perfil.component';
import { FinanzasComponent } from './finanzas/finanzas.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { ChangePasswordComponent } from './change-password/change-password.component';




const routes: Routes = [
  {path: 'Perfil', component: PerfilComponent},
  {path: 'Test', component: TestComponent},
  {path: 'Verifycode', component: VerifyCodeComponent},
  {path: 'changePassword', component: ChangePasswordComponent} 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtrasRoutingModule { }
