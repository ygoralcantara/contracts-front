import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUserBody, CreateUserResponse } from './user.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly registerUrl = 'users';

  constructor(private http: HttpClient) {}

  register(createUserBody: CreateUserBody): Observable<CreateUserResponse> {
    const url = `${environment.apiBaseUrl}/${this.registerUrl}`;

    return this.http.post<CreateUserResponse>(url, createUserBody);
  }
}
