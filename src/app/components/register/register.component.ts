import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../custom-validators';
import { StateService } from '../../services/state/state.service';
import { UserService } from '../../services/user/user.service';
import { CreateUserBody, User } from '../../services/user/user.interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;
  authenticated: boolean = false;

  constructor(
    private fb: FormBuilder,
    private stateService: StateService,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthService,
  ) {
    this.registerFormGroup = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        email: ['', Validators.email],
        confirmEmail: ['', Validators.required],
      },
      {
        validators: [
          CustomValidators.passwordMatchValidator,
          CustomValidators.emailMatchValidator,
        ],
      },
    );
  }

  async ngOnInit(): Promise<void> {
    this.authService.isAuthenticated().subscribe(
      (data) => {
        this.authenticated = data;
      },
      (error) => console.error(error),
    );

    if (this.authenticated) {
      await this.router.navigate(['dashboard']);
    }
  }

  onSubmit() {
    this.stateService.setIsLoading(true);
    const values = this.registerFormGroup.value;

    const createUserBody: CreateUserBody = {
      username: values.username,
      firstName: values.firstName,
      lastName: values.lastName || null,
      email: values.email,
      password: values.password,
    };

    this.userService.register(createUserBody).subscribe(
      (data) => this.registerSuccess(data.data),
      (error) => this.registerFailed(),
    );

    setTimeout(() => this.stateService.setIsLoading(false), 1000);
  }

  async registerSuccess(user: User) {
    await this.router.navigate(['signin']);
    this.snackBar.open(`Usuário ${user.firstName} criado com sucesso`, 'Undo', {
      duration: 2000,
    });
  }

  registerFailed() {
    this.snackBar.open(`Cadastro do usuário falhou`, 'Undo', {
      duration: 2000,
    });
  }
}
