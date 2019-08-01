import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomValidators } from './validators';
import { UserCredentials, User } from '../../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm = this.builder.group({
    username: ['', CustomValidators.usernameValidator],
    passwordGroup: this.builder.group({
      password: ['', CustomValidators.passwordValidator],
      confirmPassword: ['', CustomValidators.passwordValidator]
    }, { validator: CustomValidators.passwordsNotMatchValidator })
  });

  @Output()
  signupRequested = new EventEmitter<UserCredentials>();

  constructor(private builder: FormBuilder) { }

  get username() { return this.signUpForm.get('username'); }
  get passwordGroup() { return this.signUpForm.get('passwordGroup'); }
  get password() { return this.signUpForm.get('passwordGroup.password'); }
  get confirmPassword() { return this.signUpForm.get('passwordGroup.confirmPassword'); }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.signupRequested.emit({ username: this.username.value, password: this.password.value });
    }
  }

  ngOnInit() {
  }
}
