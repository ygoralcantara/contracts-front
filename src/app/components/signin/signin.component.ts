import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

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
  ) {
    this.loginFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.authService.isAuthenticated()) {
      await this.router.navigate(['dashboard']);
    }
  }

  async onSubmit() {
    const values = this.loginFormGroup.value;

    if (values.username && values.password) {
      this.authService.login(values.username, values.password).subscribe(
        (data) => this.loginSuccess(data.data.access_token),
        (error) => (this.loginInvalid = true),
      );
    }
  }

  async loginSuccess(accessToken: string): Promise<void> {
    console.log(accessToken);
    this.authService.setAccessToken(accessToken);
    await this.router.navigate(['dashboard']);
  }
}
