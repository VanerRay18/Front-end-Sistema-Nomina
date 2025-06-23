import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { RhService } from 'src/app/services/rh.service';

@Component({
  selector: 'app-newtrabajador',
  templateUrl: './newtrabajador.component.html',
  styleUrls: ['./newtrabajador.component.css']
})
export class NewtrabajadorComponent implements OnInit {
  datosPersonalesForm: FormGroup;
  // nombre: string = '';

  constructor(private dpf: FormBuilder, private rh: RhService, private FormsModule: FormsModule,
  ) {
    this.datosPersonalesForm = this.dpf.group({
      // nombre: ['', [Validators.required , Validators.minLength(15) ]],
      foto: [null],
      nombre: [''],
      primerApellido: [''],
      segundoApellido: [''],
      rfc: [''],
      curp: [''],
      catSexoId: [''],
      catEstadoCivilId: ['']
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  guardarDatosPersonales()
  {
    const formDP = this.datosPersonalesForm.value;

    const dto = {
      foto: formDP.foto,
      nombre: formDP.nombre,
      primerApellido: formDP.primerApellido,
      segundoApellido: formDP.segundoApellido,
      rfc: formDP.rfc,
      curp: formDP.curp,
      catSexoId: Number(formDP.catSexoId),
      catEstadoCivilId: Number(formDP.catEstadoCivilId)
    };

    this.rh.saveNuevoTrabajador(dto).subscribe(
    (response) => {
      console.log(response);
      // this.router.navigate(['/pages/Inicio/General']); // Navegar al nuevo path
    },
    (error) => {
      console.log(error);
    }
    
  );

  }

}
