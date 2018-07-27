import { AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

export class PasswordsValidator {
  static validate(control: AbstractControl): ValidationErrors | null {
    let password = control.get('passwordFormControl').value;
    let confirmPassword = control.get('passwordAgainFormControl').value;
    if (password !== confirmPassword) {
      control.get('passwordAgainFormControl').setErrors( {MatchPassword: true} )
    }
    return null
  }
}
