import { Injectable } from '@angular/core';
import { HttpCoreService } from "../http-core.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingService {

  domino = "http://localhost:8063/api/v1/"
  constructor(private http:HttpCoreService) { }

  signFile(file: any): Observable<any> {
    return this.http.apiPost(`${this.domino}sign/certificate`, file);
  }
}
