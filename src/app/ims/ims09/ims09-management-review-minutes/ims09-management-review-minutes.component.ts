import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ims09-management-review-minutes',
  templateUrl: './ims09-management-review-minutes.component.html',
  styleUrls: ['./ims09-management-review-minutes.component.scss']
})
export class Ims09ManagementReviewMinutesComponent implements OnInit {

username = JSON.parse(localStorage.getItem("unique_name"));
  loading: any;
  displayArray = [];

    searchText;
  page = 1;
  pageSize = 15;

  displayName = "Management Review Minutes";

  constructor(
    private toastr: ToastrService,
    private apiService: ApiService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getResults();
  }


  getResults() { 
    this.loading = true;
    this.apiService.GetData('/ims_09/management_review_minutes/').subscribe(data => {
      this.loading = false;
      this.displayArray = data['results'];
    },
      err => {
        console.log(err)
        this.loading = false;
        this.toastr.error('Error', err.message);
      }
    );
  }
}
