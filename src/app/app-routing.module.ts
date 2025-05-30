
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';
import { LoginComponent } from './core/auth/login/login.component';
import { LoggedGuard } from './core/guards/logged.guard';
import { TestComponent } from './modules/pages/extras/test/test.component';



const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'Test', component: TestComponent },
  {path: 'login',
    component: LoginComponent,
  },
  {
    path: 'pages',
    component: LayoutComponent,
    // canActivate: [LoggedGuard],
    children: [
      {
        path:'Extras',
        loadChildren:() =>
          import('./modules/pages/extras/extras.module').then(
            (m) => m.ExtrasModule
          ),
      },
      {
        path:'Inicio',
        loadChildren:() =>
          import('./modules/pages/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path:'Admin',
        loadChildren:() =>
          import('./modules/pages/administration/administration.module').then(
            (m) => m.AdministrationModule
          ),
      }
    ],
    },
     {path:'**',redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
