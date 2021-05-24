import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.css'],
})
export class MyToolbarComponent implements OnInit {
  isLoading: boolean = false;
  authenticated: boolean = false;

  constructor(
    private stateService: StateService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.stateService
      .getIsLoading()
      .subscribe((isLoading) => (this.isLoading = isLoading));
    this.authService.isAuthenticated().subscribe(
      (data) => (this.authenticated = data),
      (error) => console.error(error),
    );
  }
}
