import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})

export class ChangePasswordComponent {
  
  changepasswordForm: FormGroup;
  checkboxMayus = false;
  checkboxMinus = false;
  checkboxNumero = false;
  checkbox8 = false;
  checkboxEspaciosB = false;

  password_valido = false;
  
  constructor(private fb: FormBuilder, private authService: AuthService, private FormsModule: FormsModule, private router: Router) {
    this.changepasswordForm = this.fb.group({
      firstPassword: ['', [
        Validators.required, 
        Validators.pattern(/^\d{8}$/) // Solo números y exactamente 6 caracteres
      ]],
      secondPassword: ['', [
        Validators.required, 
        Validators.pattern(/^\d{8}$/) // Solo números y exactamente 6 caracteres
      ]]
    });
  }
  
  ngOnInit(): void {
    
  }

  onInputChange(event: Event) {
    this.password_valido = true;
    const fp = event.target as HTMLInputElement;

    const tieneMayuscula = /[A-Z]/.test(fp.value);
    if (tieneMayuscula) {
      this.checkboxMayus = true;
    } else {
      this.password_valido = false;
      this.checkboxMayus = false;
    }

    const tieneMinuscula = /[a-z]/.test(fp.value);
    if (tieneMinuscula) {
      this.checkboxMinus = true;
    } else {
      this.password_valido = false;
      this.checkboxMinus = false;
    }

    const tieneNumero = /[0-9]/.test(fp.value);
    if (tieneNumero) {
      this.checkboxNumero = true;
    } else {
      this.password_valido = false;
      this.checkboxNumero = false;
    }

    if (fp.value.length > 8) {
      this.checkbox8 = true;
    } else {
      this.password_valido = false;
      this.checkbox8 = false;
    }

    if (fp.value.includes(' ')) {
      this.password_valido = false;
      this.checkboxEspaciosB = false;
    } else {
      this.checkboxEspaciosB = true;
    }

  }


  onSubmit(){
  
      const data = {
          // Authorization: 1, 
          firstpass: this.changepasswordForm.value.firstPassword,
          secondpass: this.changepasswordForm.value.secondPassword,
      };

      if( data.firstpass != '' && data.secondpass != '' ){
        if( this.password_valido === true ){
          if( data.firstpass == data.secondpass ){
            console.log(data.firstpass);
            this.authService.savePassword(data.firstpass).subscribe(
              (response) => {
                console.log(response);
                this.router.navigate(['/pages/Inicio/General']); // Navegar al nuevo path
              },
              (error) => {
                console.log(error);
              }
            );
          } else {
            Swal.fire({
                title: 'Error en contraseña',
                text: 'La contraseña debe ser la misma en los dos campos',
                icon: 'error',
                confirmButtonText: 'OK'
            });
          }
        } else {
          Swal.fire({
              title: 'Error en contraseña',
              text: 'La contraseña no cumple son los requisitos solicitados',
              icon: 'error',
              confirmButtonText: 'OK'
          });
        }
      } else {
        Swal.fire({
            title: 'Error en contraseña',
            text: 'Es necesario ingresar una contraseña nueva',
            icon: 'error',
            confirmButtonText: 'OK'
        });
      }
  
      // this.authService.authToken(data).subscribe(
      // (response) => {
      //   console.log(response);
        
      // },
      // (error) => {
      //     Swal.fire({
      //       title: error.error.message != null?'Error':'Error con el sistema...',
      //         text: error.error.message != null? error.error.message:'Favor de acudir al area de mantenimiento',
      //         icon: 'error',
      //         confirmButtonText: 'OK'
      //     });
      // }
      // );
      
  }

}
