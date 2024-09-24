import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCoreService {

  constructor(private http: HttpClient) { }

  apiPost(domino:string,data:any): Observable<any> {
    return this.http.post<any>(domino, data);
  }
  apiPostFile(domino:string,data:any): Observable<any> {
    return this.http.post<any>(domino, data, {
      responseType: 'text' as 'json'// Indicar que esperamos un texto como respuesta
    })
  }
  getPost(domino:string): Observable<any> {
    return this.http.get<any>(domino);
  }
}
