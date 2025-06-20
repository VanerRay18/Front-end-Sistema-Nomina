import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newtrabajador',
  templateUrl: './newtrabajador.component.html',
  styleUrls: ['./newtrabajador.component.css']
})
export class NewtrabajadorComponent implements OnInit {
  datosPersonalesForm: FormGroup;
  // nombre: string = '';

  constructor(private dpf: FormBuilder, private FormsModule: FormsModule,
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
    const formValue = this.datosPersonalesForm.value;

    // const dto = {
    //   name,
    //   firstSurname,
    //   secondSurname,
    //   rfc: formValue.rfc,
    //   curp: formValue.curp,
    //   nacimiento: new Date(formValue.fechaNacimiento).toISOString(),
    //   dateStart: new Date(formValue.fechaInicio).toISOString(),
    //   dateFin: null,
    //   entrada: formatHorario(formValue.horarioEnt),
    //   salida: formatHorario(formValue.horarioSal),
    //   active: true,
    //   phone: formValue.telefono,
    //   config: {},
    //   catJobId: Number(formValue.puestoLaboral),
    //   catEmploymentId: Number(formValue.tipoContratacion),
    //   catSeguroId: Number(formValue.tipoSeguro),-+
    // };
  }

}
