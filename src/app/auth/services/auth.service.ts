import { BehaviorSubject, Observable } from 'rxjs';
import { UserValidation } from 'src/app/mock-api/models/api-response.model';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User, UserCredentials } from '../models/user.model';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) { }
  user$: BehaviorSubject<User> = new BehaviorSubject(null);
  isLoggedIn$ = this.user$.asObservable();

  login(user: UserCredentials): Observable<User> {
    // we need to cast the result that we expect the API call to return
    return this.http.post(environment.api.login, user) as Observable<User>;
  }

  logout() {
    this.user$.next(null);
  }

  validateUsername(user: User): Observable<UserValidation> {
    return this.http.post(environment.api.validateUsername, user) as Observable<UserValidation>;
  }

  signup(user: UserCredentials): Observable<User> {
    return this.http.post(environment.api.signup, user) as Observable<User>;
  }
}
