import { Injectable } from '@angular/core';
import { HttpCoreService } from '../http-core.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  domino = "http://localhost:8063/api/v1/"
  constructor(private http:HttpCoreService) { }

  login(datos: any): Observable<any> {
    return this.http.apiPost(`${this.domino}auth/login`, datos);
  }
  register(datos: any): Observable<any> {
    return this.http.apiPost(`${this.domino}auth/register`, datos);
  }
  restorePass(datos: any): Observable<any> {
    return this.http.apiPost(`${this.domino}auth/restore-pass`, datos);
  }
}
