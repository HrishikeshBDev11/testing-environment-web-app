import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginDetails } from 'src/app/shared/modals/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _authServices: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {

  }

  loginDetails: LoginDetails = new LoginDetails();

  loginIn() {
    if (this.loginDetails.UserName && this.loginDetails.Password) {
      this._router.navigate(['dashboard'])
    } else {
      alert('Please enter proper user details.')
    }
  }

}
