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

  getEmployees( page: any, size: any): Observable<ApiResponse> {
    let headers = new HttpHeaders({ 'page': page, 'size': size });
     console.log('Headers:', headers);
    console.log(`${environment.baseService}${'/employee'}`)
    return this.http.get<ApiResponse>(`${environment.baseService}${'/employee'}`,
      {headers});
  }

  saveNuevoTrabajador(data:any): Observable<ApiResponse> {//Trae la nomina actual

    return this.http.post<ApiResponse>(`${environment.baseService}${'/employee'}`,data);
  }

}
