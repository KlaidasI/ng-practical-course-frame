import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomValidators, errorMessages } from './validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  errors = errorMessages;

  signUpForm = this.builder.group({
    username: ['', CustomValidators.usernameValidator],
    passwordGroup: this.builder.group({
      password: ['', CustomValidators.passwordValidator],
      confirmPassword: ['', CustomValidators.passwordValidator]
    }, { validator: CustomValidators.passwordsNotMatchValidator })
  });

  @Output()
  signupRequested = new EventEmitter<boolean>();

  constructor(private builder: FormBuilder) { }

  get username() { return this.signUpForm.get('username'); }
  get passwordGroup() { return this.signUpForm.get('passwordGroup'); }
  get password() { return this.signUpForm.get('passwordGroup.password'); }
  get confirmPassword() { return this.signUpForm.get('passwordGroup.confirmPassword'); }

  onSubmit() {
    this.signupRequested.emit(true);
  }

  ngOnInit() {
  }
}
