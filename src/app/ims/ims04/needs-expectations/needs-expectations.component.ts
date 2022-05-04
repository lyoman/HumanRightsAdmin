import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../../../services/api.service';

@Component({
  selector: 'app-needs-expectations',
  templateUrl: './needs-expectations.component.html',
  styleUrls: ['./needs-expectations.component.scss']
})
export class NeedsExpectationsComponent implements OnInit {

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
    this.apiService.GetData('/ims_04/needs_expetations').subscribe(data => {
      this.loading = false;
      console.log('all needs_expetations', data['results']);
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
