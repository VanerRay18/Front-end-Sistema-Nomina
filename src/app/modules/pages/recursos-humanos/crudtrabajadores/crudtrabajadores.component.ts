
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/models/ApiResponse';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FileTransferService } from 'src/app/services/file-transfer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-crudtrabajadores',
  templateUrl: './crudtrabajadores.component.html',
  styleUrls: ['./crudtrabajadores.component.css']
})
export class CRUDTrabajadoresComponent implements OnInit{
  searchTerm: string = '';
  headersB = ['id','Nombre','Primer Apellido','Segundo Apellido','RFC','CURP', 'Sexo', 'Estado Civil','Quincena de ingreso', 'Quincena gobierno', 'Quincena Sep', 'Perfil', 'Seguro Social', 'Regimen', 'Tipo de contratacion', 'Nivel', 'Nivel academico', 'Status', ''];
  displayedColumnsB = ['id','nombre','primer_apellido ','segundo_apellido','rfc','curp', 'sexo', 'estado_civil','qnaini', 'qnagob', 'qnasep', 'perfil', 'nss', 'regimen', 'tipo_contratacion', 'nivel', 'nivel_academico', 'activo'];
  dataB:any[] = [];
  headersC = ['id','Nombre','Primer Apellido','Segundo Apellido','RFC','CURP', 'Sexo', 'Estado Civil','Quincena de ingreso', 'Quincena gobierno', 'Quincena Sep', 'Perfil', 'Seguro Social', 'Regimen', 'Tipo de contratacion', 'Nivel', 'Nivel academico', 'Status', ''];
  displayedColumnsC = ['id','nombre','primer_apellido ','segundo_apellido','rfc','curp', 'sexo', 'estado_civil','qnaini', 'qnagob', 'qnasep', 'perfil', 'nss', 'regimen', 'tipo_contratacion', 'nivel', 'nivel_academico', 'activo'];
  dataC:any[] = [];
  crearlayout:any;
  isLoading = false;
  terceroId: any;
  selectedFile: File | null = null;
  info: any;
  added: any;
  ilimitado: any;
  arrayUserRecibido: any;
  activeTab: string = 'base';
  tabs = [
    { id: 'base', title: 'De base', icon: 'fa-solid fa-file-csv' },
    { id: 'contrato', title: 'Por contrato', icon: 'fa-solid fa-file-csv' }
  ];

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.getData();
  }

  onDelete(licenciaId: any) {

  }

getData() {
  this.dataB = [
    {
      id: 1,
      nombre: 'Juan',
      primer_apellido: 'Pérez',
      segundo_apellido: 'López',
      rfc: 'PEPJ800101HDF',
      curp: 'PEPJ800101HDFRZN00',
      sexo: 'Masculino',
      estado_civil: 'Soltero',
      qnaini: '2023-01',
      qnagob: '2023-02',
      qnasep: '2023-03',
      perfil: 'Docente',
      nss: '12345678901',
      regimen: 'Ordinario',
      tipo_contratacion: 'Base',
      nivel: 'P1',
      nivel_academico: 'Licenciatura',
      activo: true
    },
    {
      id: 2,
      nombre: 'María',
      primer_apellido: 'Gómez',
      segundo_apellido: 'Hernández',
      rfc: 'GOHM900202MDF',
      curp: 'GOHM900202MDFRLR00',
      sexo: 'Femenino',
      estado_civil: 'Casada',
      qnaini: '2022-10',
      qnagob: '2022-11',
      qnasep: '2022-12',
      perfil: 'Administrativo',
      nss: '98765432109',
      regimen: 'Especial',
      tipo_contratacion: 'Honorarios',
      nivel: 'A2',
      nivel_academico: 'Maestría',
      activo: false
    }
  ];

  this.dataC = [
    {
      id: 3,
      nombre: 'Carlos',
      primer_apellido: 'Ramírez',
      segundo_apellido: 'Nava',
      rfc: 'RANC850505HDF',
      curp: 'RANC850505HDFMRV00',
      sexo: 'Masculino',
      estado_civil: 'Divorciado',
      qnaini: '2021-08',
      qnagob: '2021-09',
      qnasep: '2021-10',
      perfil: 'Técnico',
      nss: '11223344556',
      regimen: 'Ordinario',
      tipo_contratacion: 'Eventual',
      nivel: 'T3',
      nivel_academico: 'Técnico Superior',
      activo: true
    },
    {
      id: 4,
      nombre: 'Laura',
      primer_apellido: 'Martínez',
      segundo_apellido: 'Soto',
      rfc: 'MASL920304MDF',
      curp: 'MASL920304MDFRRL00',
      sexo: 'Femenino',
      estado_civil: 'Viuda',
      qnaini: '2020-05',
      qnagob: '2020-06',
      qnasep: '2020-07',
      perfil: 'Directivo',
      nss: '66778899001',
      regimen: 'Especial',
      tipo_contratacion: 'Base',
      nivel: 'D1',
      nivel_academico: 'Doctorado',
      activo: false
    }
  ];
}

  setActiveTab(tabId: string) {
    this.activeTab = tabId; // Cambia la pestaña activa
  }

}
