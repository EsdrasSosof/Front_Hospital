import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // private apiUrl = 'http://localhost:3000/api/users';
  // private apiUrl2 = 'http://localhost:3000/api';
  private apiUrl2 = 'https://nestjs-backend-pg2.onrender.com/api';
  
  constructor(private http: HttpClient, private readonly api: ApiService) { }

  getMedicines(): Observable<any[]> {
    // return this.http.get<any[]>(this.apiUrl);
    return this.http.get<any[]>(`${this.apiUrl2}/users`);
  }

  createUser(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // Realiza la solicitud POST enviando los datos y encabezados
    // return this.http.post(this.apiUrl, data, { headers });
    return this.http.post<any[]>(`${this.apiUrl2}/users`, data, { headers });
  }

  updateUser(id: number, data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.patch(`${this.apiUrl2}/users/${id}`, data, { headers });
  }

  getUserById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl2}/users/${id}`, { headers });
  }

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl2}/roles`);
  }
}
