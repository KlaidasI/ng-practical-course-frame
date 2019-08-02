import { ObserversModule } from '@angular/cdk/observers';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormField, MatInput } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from '../../components/login/login.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ObserversModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AuthComponent,
        LoginComponent,
        MatError,
        MatFormField,
        MatInput,
        SignUpComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
