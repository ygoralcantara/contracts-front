import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  loginFormGroup: FormGroup;
  loginInvalid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private stateService: StateService,
    private snackBar: MatSnackBar,
  ) {
    this.loginFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {
    // if (this.authService.isAuthenticated()) {
    //   await this.router.navigate(['dashboard']);
    // }
  }

  async onSubmit() {
    this.stateService.setIsLoading(true);
    const values = this.loginFormGroup.value;

    if (values.username && values.password) {
      this.authService.login(values.username, values.password).subscribe(
        (data) => this.loginSuccess(data.data.access_token),
        (error) => this.loginFailed(),
      );
    }
    setTimeout(() => this.stateService.setIsLoading(false), 1000);
  }

  async loginSuccess(accessToken: string): Promise<void> {
    this.authService.setAccessToken(accessToken);
    await this.router.navigate(['dashboard']);
    this.snackBar.open('Login realizado com sucesso!', 'Undo', {
      duration: 2000,
    });
  }

  loginFailed(): void {
    this.loginInvalid = true;
    this.snackBar.open('Username e/ou senha incorretos!', 'Undo', {
      duration: 2000,
    });
  }
}
