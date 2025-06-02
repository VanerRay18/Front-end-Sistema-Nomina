import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent implements OnInit{
  
  verifycodeForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.verifycodeForm = this.fb.group({
      token: ['', [
        Validators.required, 
        Validators.pattern(/^\d{6}$/) // Solo números y exactamente 6 caracteres
      ]]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(){

  let token = this.verifycodeForm.value.token;

    this.authService.authToken(token).subscribe(
    (response) => {
      if( response.success == true ){
        Swal.fire({
            title: '',
            text: ""+response.message+"",
            icon: 'success',
            confirmButtonText: 'OK'
        });
        this.router.navigate(['/pages/Extras/changePassword']); // Navegar al nuevo path
      } else {
        Swal.fire({
            title: '',
            text: ""+response.message+"",
            icon: 'error',
            confirmButtonText: 'OK'
        });
      }
      
        // const token = response.headers.get('Authorization');
        // // const tokenExpiration = new Date().getTime() + (2 * 60 * 60 * 1000) + (58 * 60 * 1000); // 2 horas y 58 minutos
        // const tokenExpiration = new Date().getTime() + (5000);
        // const rolId = response.body.data.roles;
        // const userId = response.body.data.userId;
        // const path = response.body.data.config.principal;
        // const extras = response.body.data.config.extras
        // this.PermisosUserService.save(response.body.data.permisos);
        // // Guardar el token y otros datos en localStorage
        // if (token) {
        //     localStorage.setItem('userId', userId);
        //       localStorage.setItem('extras', extras != null? extras : '');
        //     // localStorage.setItem('eliminar', eliminar);
        //     // localStorage.setItem('agregar', agregar);
        //     localStorage.setItem('rolId', rolId);
        //     localStorage.setItem('token', token);
        //     localStorage.setItem('tokenExpiration', tokenExpiration.toString());

        //     this.router.navigate([path]); // Navegar al nuevo path
        // }

        // this.isLoading = false; // Desactivar el loader
        // loginButton.disabled = false; // Habilitar el botón nuevamente
    },
    (error) => {
        Swal.fire({
          title: error.error.message != null?'Error':'Error con el sistema...',
            text: error.error.message != null? error.error.message:'Favor de acudir al area de mantenimiento',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        // this.isLoading = false; // Desactivar el loader
        // loginButton.disabled = false; // Habilitar el botón nuevamente
    }
);
    
  }
}
