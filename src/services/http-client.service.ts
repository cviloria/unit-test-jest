import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockyApiService {
  private apiUrl =
    'https://run.mocky.io/v3/4eded20d-bf79-401c-b37f-c1135a88f96d'; // Reemplaza con tu URL de Mocky.io

  constructor(private http: HttpClient) {}

  // Método para obtener datos de la API
  getMockData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
