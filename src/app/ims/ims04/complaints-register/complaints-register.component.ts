import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../../../services/api.service';

@Component({
  selector: 'app-complaints-register',
  templateUrl: './complaints-register.component.html',
  styleUrls: ['./complaints-register.component.scss']
})
export class ComplaintsRegisterComponent implements OnInit {

  adminRoles = JSON.parse(localStorage.getItem("isAdmin"));
  loading: any;

  searchText;
  page = 1;
  pageSize = 15;

  userResults = [];

  constructor(
    private toastr: ToastrService,
    private apiService: ApiService,
  ) {

  }

  ngOnInit(): void {
    this.getResults();
  }


  getResults() {
    this.loading = true;
    this.apiService.GetData('/ims_04/complaints_register').subscribe(data => {
      this.loading = false;
      console.log('all complaints_register', data['results']);
      this.userResults = data['results'];
    },
      err => {
        console.log(err)
        this.loading = false;
        this.toastr.error('Error', err.message);
      }
    );
  }
}
