import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ims07-category',
  templateUrl: './ims07-category.component.html',
  styleUrls: ['./ims07-category.component.scss']
})
export class Ims07CategoryComponent implements OnInit {

realRoute: any;

  username = JSON.parse(localStorage.getItem("unique_name"));
  loading: any;
  details = [];

  searchText;
  page = 1;
  pageSize = 15;

  choosenCtg: any;

  AT = [];
  Competence = [];
  Communication = [];

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
    console.log("this.activatedRoute.url", this.activatedRoute['params']['value']['namesvn']);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.choosenCtg = this.activatedRoute['params']['value']['namesvn'];
      localStorage.setItem('choosenCtg', this.choosenCtg);
    });
    this.AT = JSON.parse(localStorage.getItem("AT"));
    this.Competence = JSON.parse(localStorage.getItem("Competence"));
    this.Communication = JSON.parse(localStorage.getItem("Communication"));

    this.getResults();
  }

  getResults() {
    if (this.choosenCtg == "AT") {
      this.displayArray = JSON.parse(localStorage.getItem("AT"));
      this.displayName = "Awareness/ Trainings";
    }
    if (this.choosenCtg == "Competence") {
      this.displayArray = JSON.parse(localStorage.getItem("Competence"));
      this.displayName = "Competence documents";
    }
    if (this.choosenCtg == "Communication") {
      this.displayArray = JSON.parse(localStorage.getItem("Communication"));
      this.displayName = "Compliance Obligations Register";
    }
    console.log("displayArray", this.displayArray);
  }

}
