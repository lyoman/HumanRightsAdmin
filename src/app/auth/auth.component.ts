import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from 'jwt-decode';
import { routerTransition } from './../router.animations';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [routerTransition()]
})
export class AuthComponent implements OnInit {


  constructor(
    private router: Router,
    private authservice: AuthService,
    private toastr: ToastrService,

  ) {

  }

  formModel = {
    username: '',
    password: ''
  };

  loginError: any;
  username: any;
  deviceToken: any;

  getUserDetails: any;

  loading: any;

  ngOnInit() {
      localStorage.setItem('isLoggedin', 'true');
    if(localStorage.getItem('token') != null){
        this.router.navigateByUrl('/dashboard');
    }
  }

  onSubmit1() {
    localStorage.setItem('isLoggedin', 'true');
    localStorage.setItem('token', "logged in");
    this.toastr.success('Welcome!', 'Authentication successful.');
    this.router.navigateByUrl('/dashboard');
  }

  onSubmit(form: NgForm) {
    this.loading = true;
    this.authservice.login(form.value)
      .subscribe
      (
        data => {
          console.log("data", data);
          this.loading = false;
          // this.deviceToken = jwt_decode(data['token'])

          console.log(jwt_decode(data['token']));

          this.getUserDetails = jwt_decode(data['token']);
          localStorage.setItem('user', JSON.stringify(this.getUserDetails));
          localStorage.setItem('token', data.token);
          localStorage.setItem('unique_name', JSON.stringify(this.getUserDetails.username));
          console.log("unique_name", JSON.stringify(this.getUserDetails.username));

          this.toastr.success('Welcome!', 'Authentication successful.');
          localStorage.setItem('isLoggedin', 'true');
          this.router.navigateByUrl('/dashboard');
        },

        err => {
          this.loading = false;
          console.log(err);
          if (err.status === 400) {
            this.toastr.error('Incorrect username or password.', 'Authentication failed.');
          } else {
            this.loginError = err;
          }
          this.toastr.error(err.message);
        });
  }


}
