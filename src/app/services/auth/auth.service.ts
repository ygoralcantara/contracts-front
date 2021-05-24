import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthLoginBody, AuthLoginResponse } from './auth.interface';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly loginUrl = 'auth/login';
  authenticated: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    this.authenticated = new BehaviorSubject<boolean>(false);
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  setAccessToken(accessToken: string): void {
    localStorage.setItem('access_token', accessToken);
  }

  isAuthenticated(): Observable<boolean> {
    const token = this.getAccessToken();
    const auth = token ? !this.jwtHelper.isTokenExpired(token) : false;
    this.authenticated.next(auth);

    return this.authenticated.asObservable();
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
