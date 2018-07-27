import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    passwordFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50),
    ]),
  });
  emailErrorMessage: string;
  passwordErrorMessage: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('emailFormControl').value;
      const password = this.loginForm.get('passwordFormControl').value;
      this.authService.signInWithEmail(email, password).subscribe(
        error => {
          if (!error) {
            this.router.navigate(['/']);
          } else {
            const errorCode = error.code;
            const errorMessage = error.message;
            switch(errorCode) {
              case 'auth/invalid-email': ;
              case 'auth/user-disabled': ;
              case 'auth/user-not-found': {
                this.loginForm.get('emailFormControl').setErrors({
                  error: true,
                });
                this.emailErrorMessage = errorMessage;
                break;
              }
              case 'auth/wrong-password': {
                this.loginForm.get('passwordFormControl').setErrors({
                  error: true,
                });
                this.passwordErrorMessage = errorMessage;
                break;
              }
              default: {
                console.log('unexpected error: ', errorMessage, ', error_code: ', errorCode);
              }
            }
          }
        }
      );
    }
  }
}
