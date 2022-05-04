import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ims06-category',
  templateUrl: './ims06-category.component.html',
  styleUrls: ['./ims06-category.component.scss']
})
export class Ims06CategoryComponent implements OnInit {

realRoute: any;

  username = JSON.parse(localStorage.getItem("unique_name"));
  loading: any;
  details = [];

  searchText;
  page = 1;
  pageSize = 15;

  choosenCtg: any;

  BF = [];
  OTHER = [];
  COR = [];
  ACTs = [];
  IMSOT = [];
  IBRA = [];
  BRA = [];

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
      this.choosenCtg = this.activatedRoute['params']['value']['namec'];
      localStorage.setItem('choosenCtg', this.choosenCtg);
    });
    this.BF = JSON.parse(localStorage.getItem("BF"));
    this.OTHER = JSON.parse(localStorage.getItem("OTHER"));
    this.COR = JSON.parse(localStorage.getItem("COR"));
    this.ACTs = JSON.parse(localStorage.getItem("ACTs"));
    this.IMSOT = JSON.parse(localStorage.getItem("IMSOT"));
    this.IBRA = JSON.parse(localStorage.getItem("IBRA"));
    this.BRA = JSON.parse(localStorage.getItem("BRA"));

    this.getResults();
  }

  getResults() {
    if (this.choosenCtg == "BF") {
      this.displayArray = JSON.parse(localStorage.getItem("BF"));
      this.displayName = "Blank forms";
    }
    if (this.choosenCtg == "OTHER") {
      this.displayArray = JSON.parse(localStorage.getItem("OTHER"));
      this.displayName = "Other documents";
    }
    if (this.choosenCtg == "COR") {
      this.displayArray = JSON.parse(localStorage.getItem("COR"));
      this.displayName = "Compliance Obligations Register";
    }

    if (this.choosenCtg == "ACTs") {
      this.displayArray = JSON.parse(localStorage.getItem("ACTs"));
      this.displayName = "ACTs";
    }

    if (this.choosenCtg == "IMSOT") {
      this.displayArray = JSON.parse(localStorage.getItem("IMSOT"));
      this.displayName = "IMS Objectives and targets";
    }

    if (this.choosenCtg == "IBRA") {
      this.displayArray = JSON.parse(localStorage.getItem("IBRA"));
      this.displayName = "Issue Based Risk Assessment";
    }

    if (this.choosenCtg == "BRA") {
      this.displayArray = JSON.parse(localStorage.getItem("BRA"));
      this.displayName = "Baseline Risk Assessment (BRA)";
    }
    console.log("displayArray", this.displayArray);
  }

}
