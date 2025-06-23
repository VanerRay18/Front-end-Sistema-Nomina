
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/models/ApiResponse';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FileTransferService } from 'src/app/services/file-transfer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RhService } from 'src/app/services/rh.service';
@Component({
  selector: 'app-crudtrabajadores',
  templateUrl: './crudtrabajadores.component.html',
  styleUrls: ['./crudtrabajadores.component.css']
})
export class CRUDTrabajadoresComponent implements OnInit{
  searchTerm: string = '';
  headersB = ['id','Nombre','Primer Apellido','Segundo Apellido','RFC','CURP', 'Sexo', 'Estado Civil','Quincena de ingreso', 'Quincena gobierno', 'Quincena Sep', 'Perfil', 'Seguro Social', 'Regimen', 'Tipo de contratacion', 'Nivel', 'Nivel academico', 'Status', ''];
  displayedColumnsB = ['id','nombre','primer_apellido ','segundo_apellido','rfc','curp', 'catSexoId', 'catEstadoCivilId','qnaini', 'qnagob', 'qnasep', 'perfil', 'nss', 'catRegimenId', 'catTipoContratacionId', 'nivel', 'nivelAcademicoId', 'activo'];
  dataB:any[] = [];
  headersC = ['id','Nombre','Primer Apellido','Segundo Apellido','RFC','CURP', 'Sexo', 'Estado Civil','Quincena de ingreso', 'Quincena gobierno', 'Quincena Sep', 'Perfil', 'Seguro Social', 'Regimen', 'Tipo de contratacion', 'Nivel', 'Nivel academico', 'Status', ''];
  displayedColumnsC = ['id','nombre','primer_apellido ','segundo_apellido','rfc','curp', 'catSexoId', 'catEstadoCivilId','qnaini', 'qnagob', 'qnasep', 'perfil', 'nss', 'catRegimenId', 'catTipoContratacionId', 'nivel', 'nivelAcademicoId', 'activo'];
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
    private fb: FormBuilder,
    private rh: RhService
  ) {
  }

  ngOnInit(): void {
    this.getData();
  }

  onDelete(licenciaId: any) {

  }

getData() {
  let page = "0";
  let size = "50";
  console.log('Llamando al servicio para obtener empleados con página:', page, 'y tamaño:', size);
  this.rh.getEmployees(page, size).subscribe((response: ApiResponse) => {
    console.log('Respuesta del servicio:', response);
    console.log('Datos obtenidos:', response.data);
       this.dataB = response.data.base;
       this.dataC = response.data.otros;
        // console.log('Datos obtenidos:', this.data);
      });

}

  setActiveTab(tabId: string) {
    this.activeTab = tabId; // Cambia la pestaña activa
  }

}
