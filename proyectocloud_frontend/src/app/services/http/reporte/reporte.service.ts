import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReporteService {
  apiURL = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  getReporteJuegos(): Observable<any[]> {
    return this.http.get<any>(this.apiURL + "/getReporteJuegos").pipe(
        map(response=>response)
    );
  }
}
