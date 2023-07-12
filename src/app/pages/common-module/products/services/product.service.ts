import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected readonly baseUrl = `${environment.ADMIN_BASE_URL}`;

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };
  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  getProducts(): Observable<void> {
    return this.http.get<void>(`${this.baseUrl}/productList`, this.getHeaders());
  }

  getHeaders() {
    if (this.cookie.check('web_basket')) {
      const user = JSON.parse(this.cookie.get('web_basket'));
      this.httpOptions = {
        headers: new HttpHeaders({
          'authorization': 'Bearer ' + user.token
        })
      };
    }
    return this.httpOptions
  }
}
