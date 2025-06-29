import { RecursosHumanosModule } from './modules/pages/recursos-humanos/recursos-humanos.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './modules/pages/home/home-routing.module';
import { ExtrasRoutingModule } from './modules/pages/extras/extras-routing.module';
import { LayoutModule } from './modules/layout/layout.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './modules/pages/administration/admin-routing.module';
import { AdministrationModule } from './modules/pages/administration/administration.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AdministrationModule,
    AuthModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    HomeRoutingModule,
    ExtrasRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    RecursosHumanosModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
