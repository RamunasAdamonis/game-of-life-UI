import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  constructor(private http: HttpClient) {}

  public getGrid(): Observable<any> {
    return this.http.get<any>(`${environment.APIEndpoint}/states`);
  }
}
