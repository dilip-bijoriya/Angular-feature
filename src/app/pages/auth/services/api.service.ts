import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected readonly baseUrl = `${environment.BASE_URL}`;
  constructor(private http: HttpClient) { }

  signIn(payload: string): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/loginAccount`, payload);
  }

  signUp(payload: string): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/createAccount`, payload);
  }

  forgotPassword(payload: string): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/forgotPassword`, payload);
  }
}
