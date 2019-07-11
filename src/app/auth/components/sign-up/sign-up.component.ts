import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @Output()
  signupRequested: boolean;

  constructor() { }

  ngOnInit() {
  }

}
