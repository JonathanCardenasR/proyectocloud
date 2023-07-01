import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  apiURL = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  registrarJuego(nombreJuego: any, pkPlataforma: any): Observable<any> {
    const body = { 
        nombreJuego: nombreJuego,
        pkPlataforma: pkPlataforma
    };
    return this.http.post<any>(this.apiURL + "/registrarJuego" , body);
  }
}
