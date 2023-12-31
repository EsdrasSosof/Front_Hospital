import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  // private apiUrl = 'http://localhost:3000/api/doctors';
  // private apiUrl2 = 'http://localhost:3000/api';
  private apiUrl2 = 'https://nestjs-backend-pg2.onrender.com/api';

  constructor(private http: HttpClient, private readonly api: ApiService) { }

  getMedicos(): Observable<any[]> {
    // return this.http.get<any[]>(this.apiUrl2);
    return this.http.get<any[]>(`${this.apiUrl2}/doctors`);
  }

  createDoctor(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // Realiza la solicitud POST enviando los datos y encabezados
    return this.http.post(this.apiUrl2, data, { headers });
  }

  // updateMedico(personId: number | undefined, params: any): Observable<any> {
  updateMedico(id: number, data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // return this.http.patch<any>(`${this.apiUrl}/${personId}`, params, { headers });
    return this.http.patch(`${this.apiUrl2}/specializations/${id}`, data, { headers });
  }

  getMedicoById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl2}/specializations/${id}`, { headers });
  }

  getEspec(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl2}/specializations`);
  }

}
