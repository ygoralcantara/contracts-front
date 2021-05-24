import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  authenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    this.authService.isAuthenticated().subscribe(
      (data) => (this.authenticated = data),
      (error) => console.error(error),
    );

    return this.authenticated;
  }
}
