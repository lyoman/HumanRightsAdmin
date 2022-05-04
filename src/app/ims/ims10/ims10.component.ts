import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ims10',
  templateUrl: './ims10.component.html',
  styleUrls: ['./ims10.component.scss']
})
export class Ims10Component implements OnInit {

username = JSON.parse(localStorage.getItem("unique_name"));
  loading: any;
  details = [];

  nearmiss = [];
  accident = [];
  stopfix = [];


  constructor(
    private toastr: ToastrService,
    private apiService: ApiService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getResults();
  }


    getResults() { 
    this.loading = true;
    this.apiService.GetData('/ims_10/incident_non_conformity_and_corrective_action/').subscribe(data => {
      this.loading = false;

      this.details = data['results'];

      for (let i=0; i<this.details.length; i++) {
        if(this.details[i]['category'] == "Stop and Fix Reports") {
          this.stopfix.push(this.details[i]);
          localStorage.setItem('stopfix', JSON.stringify(this.stopfix));
        }

        if(this.details[i]['category'] == "Near Miss Report") {
          this.nearmiss.push(this.details[i]);
          localStorage.setItem('nearmiss', JSON.stringify(this.nearmiss));
        }

        if(this.details[i]['category'] == "Accident Investigation Reports") {
          this.accident.push(this.details[i]);
          localStorage.setItem('accident', JSON.stringify(this.accident));
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
