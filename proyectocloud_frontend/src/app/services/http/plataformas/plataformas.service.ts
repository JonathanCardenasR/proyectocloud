import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlataformaService {
  apiURL = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  getPlataformas(): Observable<any[]> {
    return this.http.get<any>(this.apiURL + "/getPlataformas").pipe(
        map(response=>response)
    );
  }



}