import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ims10-category',
  templateUrl: './ims10-category.component.html',
  styleUrls: ['./ims10-category.component.scss']
})
export class Ims10CategoryComponent implements OnInit {


realRoute: any;

  username = JSON.parse(localStorage.getItem("unique_name"));
  loading: any;
  details = [];

  searchText;
  page = 1;
  pageSize = 15;

  choosenCtg: any;

  nearmiss = [];
  accident = [];
  stopfix = [];

  displayName: any;
  displayArray = [];

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private apiService: ApiService,
    // private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
 
    this.activatedRoute.params.subscribe((params: Params) => {
      this.choosenCtg = this.activatedRoute['params']['value']['namenon'];
      localStorage.setItem('choosenCtg', this.choosenCtg);
    });
    this.nearmiss = JSON.parse(localStorage.getItem("nearmiss"));
    this.accident = JSON.parse(localStorage.getItem("accident"));
    this.stopfix = JSON.parse(localStorage.getItem("stopfix"));

    this.getResults();
  }

  getResults() {
    if (this.choosenCtg == "nearmiss") {
      this.displayArray = JSON.parse(localStorage.getItem("nearmiss"));
      this.displayName = "Near Miss Report";
    }
    if (this.choosenCtg == "accident") {
      this.displayArray = JSON.parse(localStorage.getItem("accident"));
      this.displayName = "Accident Investigation Reports";
    }
    if (this.choosenCtg == "stopfix") {
      this.displayArray = JSON.parse(localStorage.getItem("stopfix"));
      this.displayName = "Stop and Fix Reports";
    }
  }


}
