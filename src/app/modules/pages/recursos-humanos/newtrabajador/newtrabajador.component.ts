import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RhService } from 'src/app/services/rh.service';

@Component({
  selector: 'app-newtrabajador',
  templateUrl: './newtrabajador.component.html',
  styleUrls: ['./newtrabajador.component.css']
})
export class NewtrabajadorComponent implements OnInit {
  datosPersonalesForm: FormGroup;

  catSexo = [];
  catRegimen = [];
  catEstadoCivil = [];
  catNivelAcademico = [];

  constructor(private dpf: FormBuilder, private rh: RhService, private FormsModule: FormsModule,
 private router: Router) {
    this.datosPersonalesForm = this.dpf.group({
      // nombre: ['', [Validators.required , Validators.minLength(15) ]],
      // foto: [null],
      nombre: [''],
      primerApellido: [''],
      segundoApellido: [''],
      rfc: [''],
      curp: [''],
      catSexoId: [''],
      catEstadoCivilId: [''],
      nss: [''],
      catRegimenId: [''],
      nivelAcademicoId: ['']
    });
  }

  ngOnInit(): void {
 
    this.rh.getCatalogos().subscribe(
      (response) => {
        this.catSexo = response.data.catSexo;
        this.catRegimen = response.data.catRegimen;
        this.catEstadoCivil = response.data.catEstadoCivil;
        this.catNivelAcademico = response.data.catNivelAcademico;
      },
      (error) => {
        console.log(error);
      }
    );

  }
  

  guardarDatosPersonales()
  {
    const formDP = this.datosPersonalesForm.value;

    const dto = {
      // foto: formDP.foto,
      rfc: formDP.rfc.toUpperCase(), // Personal
      curp: formDP.curp.toUpperCase(), // Personal
      primerApellido: formDP.primerApellido.toUpperCase(), // Personal
      segundoApellido: formDP.segundoApellido.toUpperCase(), // Personal
      nombre: formDP.nombre.toUpperCase(), // Personal
          qnaini: null, // Laboral 
          qnagob: null, // Laboral 
          qnasep: null, // Laboral 
          perfil: null, // Laboral 
      nss: formDP.nss, // Personal
      catSexoId: Number(formDP.catSexoId), // Personal
      catEstadoCivilId: Number(formDP.catEstadoCivilId), // Personal
      catRegimenId: Number(formDP.catRegimenId), // Personal
          catTipoContratacionId: 10,  // Laboral 
      nivelAcademicoId: Number(formDP.nivelAcademicoId), // Profesional
          nivel: [0], // Laboral 
      activo: true // Usuario
    };

    if( dto.rfc != '' && dto.curp != '' && dto.primerApellido != '' && dto.segundoApellido != '' && dto.nombre != '' && dto.nss != '' && dto.catSexoId > 0 && dto.catEstadoCivilId > 0 && dto.catRegimenId > 0 && dto.nivelAcademicoId > 0)
    {
        this.rh.saveNuevoTrabajador(dto).subscribe(
          (response) => {
            Swal.fire({
                title: '',
                text: 'El trabajador se insertó exitosamente',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            this.router.navigate(['/pages/RH/CRUD-Trabajadores']); // Navegar al nuevo path
          },
          (error) => {
            console.log('error',error);
          }
          
        );
    } else {
      alert('Por favor, complete todos los campos obligatorios.');
    }

  

  }

}
