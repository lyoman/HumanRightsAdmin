import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from './../../router.animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [routerTransition()]
})
export class RegisterComponent implements OnInit {


  regForm;
  loading: any;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.regForm = this.formBuilder.group({
      username: new FormControl({ value: '', disabled: false }, Validators.required),
      business: new FormControl({ value: '', disabled: false }, Validators.required),
      phone_number: new FormControl({ value: '', disabled: false }, Validators.required),
      email: new FormControl({ value: '', disabled: false }, Validators.required),
      last_name: new FormControl({ value: '', disabled: false }, Validators.required),
      first_name: new FormControl({ value: '', disabled: false }, Validators.required),
      password: new FormControl({ value: '', disabled: false }),
      confirmpassword: new FormControl({ value: '', disabled: false }, Validators.required),
    });
  }

  ngOnInit(): void {
  }

  saveRegister(regForm) {
    this.loading = true;
    console.log(regForm);
    // this.loading = false;

    if (this.regForm.get('confirmpassword').value != this.regForm.get('password').value) {
      this.toastr.error('Error', 'The passwords did not match');
      console.log("The passwords did not match");
      this.loading = false;
    } else {
      // console.log("is_physician", this.regForm.get('is_physician').value);
      // console.log("specialist_area", this.regForm.get('specialist_area').value);
      // console.log("medicall_staffer", this.regForm.get('medicall_staffer').value);

      const formData = {
        username: this.regForm.get('username').value,
        business: this.regForm.get('business').value,
        phone_number: this.regForm.get('phone_number').value,
        first_name: this.regForm.get('first_name').value,
        last_name: this.regForm.get('last_name').value,
        email: this.regForm.get('email').value,
        password: this.regForm.get('password').value,
      }

      this.authService.register(formData).subscribe(data => {
        console.log(data)
        this.loading = false;
        this.toastr.success('Success', 'Registration saved successfully');
        this.router.navigateByUrl('/auth/login');
      },
        err => {
          this.loading = false;
          if (err.status === 400) {
            this.toastr.error('Error.', 'Pliz fill in all fields!');
            this.toastr.error('Error', err.message);
            // console.log(err.error.message);
          }
          if (err.status === 500) {
            this.toastr.error('Duplication.', 'Username / Email Already Exists.');
            this.toastr.error('Error', err.error.message);
            console.log(err.error.message);
          } else {
            console.log(err)
            this.toastr.error('Error', err.message);
          }

        }
      );
    }
  }


}
