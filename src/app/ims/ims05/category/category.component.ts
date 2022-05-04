import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  realRoute: any;

  username = JSON.parse(localStorage.getItem("unique_name"));
  loading: any;
  details = [];

  searchText;
  page = 1;
  pageSize = 15;

  choosenCtg: any;

  shePolicy = [];
  legalims = [];
  consult = [];

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
      this.choosenCtg = this.activatedRoute['params']['value']['nameagain'];
      localStorage.setItem('choosenCtg', this.choosenCtg);
      // this.getResults(params['name']);
    });
    this.shePolicy = JSON.parse(localStorage.getItem("shePolicy"));
    this.legalims = JSON.parse(localStorage.getItem("legalims"));
    this.consult = JSON.parse(localStorage.getItem("consult"));
    this.getResults();
  }

  getResults() {
    if (this.choosenCtg == "she-policy") {
      this.displayArray = JSON.parse(localStorage.getItem("shePolicy"));
      this.displayName = "SHE Policy";
    }
    if (this.choosenCtg == "consulatation-and-participation") {
      this.displayArray = JSON.parse(localStorage.getItem("consult"));
      this.displayName = "Consulatation and Participation";
    }
    if (this.choosenCtg == "legal-and-ims-appointments") {
      this.displayArray = JSON.parse(localStorage.getItem("legalims"));
      this.displayName = "Legal and IMS appointments";
    }
    console.log("displayArray", this.displayArray);
  }
}
