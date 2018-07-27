import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { PasswordsValidator } from './passwords.validator';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  readonly validatorsForPass = [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(50),
  ];
  registrationForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    passwordsGroup: new FormGroup({
      passwordFormControl: new FormControl('', this.validatorsForPass),
      passwordAgainFormControl: new FormControl(''),
    }, PasswordsValidator.validate),
  });
  emailError: string;
  passwordError: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const email = this.registrationForm.get('emailFormControl').value;
      const password = this.registrationForm.get('passwordsGroup.passwordFormControl').value;
      this.authService.signUpWithEmail(email, password).subscribe(
        error => {
          if (!error) {
            this.router.navigate(['/explore']);
          } else {
            const errorCode = error.code;
            const errorMessage = error.message;
            switch(errorCode) {
              case 'auth/email-already-in-use': ;
              case 'auth/invalid-email': {
                this.registrationForm.get('emailFormControl').setErrors({
                  error: errorMessage,
                });
                this.emailError = errorMessage;
                break;
              }
              case 'auth/weak-password': {
                this.registrationForm.get('passwordsGroup.passwordFormControl').setErrors({
                  weakPassword: true,
                });
                this.passwordError = errorMessage;
                break;
              }
              default: {
                console.log(error);
              }
            }
          }
        }
      );
    }
  }
}
