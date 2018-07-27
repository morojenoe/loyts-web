import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, ValidationErrors } from '@angular/forms';
import { PasswordsValidator } from './passwords.validator';

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

  constructor() { }

  ngOnInit() {
    
  }
}
