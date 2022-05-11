import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loading: any;
  userResults = [];
  userDetails = [];
  reports = [];
  userApproval = [];
  userAllApproval = [];
  oneuserDetails = [];
  count: any;

  regForm;

  is_superuser = JSON.parse(localStorage.getItem('is_superuser'));
  username = JSON.parse(localStorage.getItem("unique_name"));
  realdata = JSON.parse(localStorage.getItem('realdata'));

  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private location: Location,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.regForm = this.formBuilder.group({
      user: new FormControl({ value: JSON.parse(localStorage.getItem('user_id')), disabled: false }, Validators.required),
      approvedby: new FormControl({ value: '', disabled: false }, Validators.required),
    });
   }

  ngOnInit(): void {

    this.getReports();

    if(JSON.parse(localStorage.getItem('is_superuser')) == false) {
      this.getOneUser();
    }

    if(JSON.parse(localStorage.getItem('is_superuser')) == true) {
      this.getUsers();
    }
    console.log("is_superuser", JSON.parse(localStorage.getItem('is_superuser')));
  }

  getUsers() {
    this.loading = true;
    this.apiService.GetData('/users/').subscribe(data => {
      this.loading = false;
      this.userDetails = data;
    },
      err => {
        console.log(err)
        this.loading = false;
        this.toastr.error('Error', err.message);
      }
    );
  }

  getReports() {
    this.loading = true;
    this.apiService.GetData('/reportcase/report_case/').subscribe(data => {
      this.loading = false;
      this.reports = data['results'];
    },
      err => {
        console.log(err)
        this.loading = false;
        this.toastr.error('Error', err.message);
      }
    );
  }

  getOneUser() {
    this.loading = true;
    this.apiService.GetData('/users/?id='+JSON.parse(localStorage.getItem('user_id'))).subscribe(data => {
      this.loading = false;
      this.oneuserDetails = data[0];
    },
      err => {
        console.log(err)
        this.loading = false;
        this.toastr.error('Error', err.message);
      }
    );
  }
}
