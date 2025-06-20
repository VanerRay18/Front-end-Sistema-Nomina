import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newtrabajador',
  templateUrl: './newtrabajador.component.html',
  styleUrls: ['./newtrabajador.component.css']
})
export class NewtrabajadorComponent implements OnInit {
  datosPersonalesForm: FormGroup;
  nombre: string = '';

  constructor(private dpf: FormBuilder, private FormsModule: FormsModule,
  ) {
    this.datosPersonalesForm = this.dpf.group({
      nombre: ['', [Validators.required , Validators.minLength(15) ]],
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
