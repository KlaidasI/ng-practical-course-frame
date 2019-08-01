import { Component, OnInit } from '@angular/core';

import { UserCredentials } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService) { }
  signupVisible = false;

  ngOnInit() { }

  toggle() {
    this.signupVisible = !this.signupVisible;
  }

  login(userCredentials: UserCredentials) {
    this.authService.login(userCredentials).subscribe(user => {
      if (user == null) {
        console.log('Failed to login.');
      } else {
        this.authService.user$.next(user);
        console.log(`User ${user.username} logged in.`);
      }
    },
    error => console.log(error));
  }

  signup(userCredentials: UserCredentials) {
    this.authService.validateUsername({ username: userCredentials.username }).subscribe(userValidation => {
      if (!userValidation.exists) {
        this.authService.signup(userCredentials).subscribe(user => {
          console.log(`User ${user.username} created.`);
        });
      } else {
        console.log('User already exists.');
      }
    },
    error => console.log(error));
  }
}
