import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { UserCredentials } from '../../models/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @ViewChild(SignUpComponent)
  private signUpComponent: SignUpComponent;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signUpComponent.signupRequested.subscribe((userCredentials: UserCredentials) => {
      this.signup(userCredentials);
    });
  }

  private signup(userCredentials: UserCredentials) {
    this.authService.validateUsername({ username: userCredentials.username }).subscribe(userValidation => {
      if (!userValidation.exists) {
        this.authService.signup(userCredentials).subscribe(user => {
          console.log(`User ${user.username} created.`);
        });
      } else {
        console.log('User already exists.');
      }
    });
  }
}
