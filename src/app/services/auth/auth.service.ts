import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthLoginBody, AuthLoginResponse } from './auth.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly loginUrl = 'auth/login';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  setAccessToken(accessToken: string): void {
    localStorage.setItem('access_token', accessToken);
  }

  isAuthenticated(): boolean {
    const token = this.getAccessToken();
    console.log(token);

    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  login(username: string, password: string): Observable<AuthLoginResponse> {
    const url = `${environment.apiBaseUrl}/${this.loginUrl}`;
    const body: AuthLoginBody = {
      username: username,
      password: password,
    };

    return this.http.post<AuthLoginResponse>(url, body);
  }
}
