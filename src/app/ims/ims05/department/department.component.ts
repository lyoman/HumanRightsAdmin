import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  username = JSON.parse(localStorage.getItem("unique_name"));
  loading: any;
  details = [];

  shePolicy = [];

  choosenDpt: any;
  legalims = [];
  consult = [];

  constructor(
    private toastr: ToastrService,
    private apiService: ApiService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      // console.log("params", params['name']);
      this.choosenDpt = params['name'];
      localStorage.setItem('choosenDpt', this.choosenDpt);
      this.getResults(params['name']);
    });
  }

  getResults(dpt) { 
    this.loading = true;
    this.apiService.GetData('/ims_05/ims_05/?department=' + dpt).subscribe(data => {
      this.loading = false;
      // console.log('all ' + dpt, data['results']);
      this.details = data['results'];
      for (let i=0; i<this.details.length; i++) {
        if(this.details[i]['category'] == "SHE Policy") {
          this.shePolicy.push(this.details[i]);
          localStorage.setItem('shePolicy', JSON.stringify(this.shePolicy));
          // console.log("she policy", JSON.parse(localStorage.getItem("shePolicy")));
        }

        if(this.details[i]['category'] == "Legal and IMS appointments") {
          this.legalims.push(this.details[i]);
          localStorage.setItem('legalims', JSON.stringify(this.legalims));
          // console.log("Legal and IMS appointments", JSON.parse(localStorage.getItem("legalims")));
        }

        if(this.details[i]['category'] == "Consultation and participation") {
          this.consult.push(this.details[i]);
          localStorage.setItem('consult', JSON.stringify(this.consult));
          // console.log("Consultation and participation", JSON.parse(localStorage.getItem("consult")));
        }
      }
    },
      err => {
        console.log(err)
        this.loading = false;
        this.toastr.error('Error', err.message);
      }
    );
  }

}
