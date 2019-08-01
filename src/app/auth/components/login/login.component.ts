import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserCredentials } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output()
  loginRequested = new EventEmitter<UserCredentials>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loginRequested.emit({ username: form.value.username, password: form.value.password });
  }
}
