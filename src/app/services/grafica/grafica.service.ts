import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficaService {

  // private apiUrl2 = 'http://localhost:3000/api';
  private apiUrl2 = 'https://nestjs-backend-pg2.onrender.com/api';

  constructor(private http: HttpClient) {}

  getGraphData(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<any[]>(`${this.apiUrl2}/graph-consultation`,{ headers });
  }
}
