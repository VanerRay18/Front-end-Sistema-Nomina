import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RhService {

  constructor(private http:HttpClient)
  {

  }

  saveNuevoTrabajador(data:any): Observable<ApiResponse> {//Trae la nomina actual

    return this.http.post<ApiResponse>(`${environment.baseService}${'/employee'}`,data);
  }

}
