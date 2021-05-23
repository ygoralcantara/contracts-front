import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password')?.value;
    const confirmPassword: string = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ NoPasswordMatch: true });
    }
  }

  static emailMatchValidator(control: AbstractControl) {
    const email: string = control.get('email')?.value;
    const confirmEmail: string = control.get('confirmEmail')?.value;

    if (email !== confirmEmail) {
      control.get('confirmEmail')?.setErrors({ NoEmailMatch: true });
    }
  }
}
