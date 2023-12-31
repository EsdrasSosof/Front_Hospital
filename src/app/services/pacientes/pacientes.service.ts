import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  // private apiUrl = 'http://localhost:3000/api/med-patients';
  private apiUrl2 = 'https://nestjs-backend-pg2.onrender.com/api';

  constructor(private http: HttpClient, private readonly api: ApiService) { }

  getPacientes(): Observable<any[]> {
    // return this.http.get<any[]>(this.apiUrl2);
    return this.http.get<any[]>(`${this.apiUrl2}/med-patients`);
  }

  createPacientes(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    // Realiza la solicitud POST enviando los datos y encabezados
    // return this.http.post(this.apiUrl2, data, { headers });
    return this.http.post(`${this.apiUrl2}/med-patients`, data, { headers });
  }

  updatePaciente(id: number, data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.patch(`${this.apiUrl2}/med-patients/${id}`, data, { headers });
  }

  getPacienteById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl2}/med-patients/${id}`, { headers });
  }
}