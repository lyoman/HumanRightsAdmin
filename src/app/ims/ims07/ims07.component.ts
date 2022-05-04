import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ims07',
  templateUrl: './ims07.component.html',
  styleUrls: ['./ims07.component.scss']
})
export class Ims07Component implements OnInit {

username = JSON.parse(localStorage.getItem("unique_name"));
  loading: any;
  details = [];

  choosenDpt: any;
  Competence = [];
  AT = [];
  Communication = [];


  constructor(
    private toastr: ToastrService,
    private apiService: ApiService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.choosenDpt = params['name'];
      localStorage.setItem('choosenDpt', this.choosenDpt);
      this.getResults("SHE");
    });
  }


    getResults(dpt) { 
    this.loading = true;
    this.apiService.GetData('/ims_07/ims_07/').subscribe(data => {
      this.loading = false;
      // console.log('all ' + dpt, data['results']);
      this.details = data['results'];

      for (let i=0; i<this.details.length; i++) {
        if(this.details[i]['category'] == "Communication") {
          this.Communication.push(this.details[i]);
          localStorage.setItem('Communication', JSON.stringify(this.Communication));
          // console.log("she policy", JSON.parse(localStorage.getItem("Communication")));
        }

        if(this.details[i]['category'] == "Competence") {
          this.Competence.push(this.details[i]);
          localStorage.setItem('Competence', JSON.stringify(this.Competence));
          // console.log("Legal and IMS appointments", JSON.parse(localStorage.getItem("Competence")));
        }

        if(this.details[i]['category'] == "Awareness/ Trainings") {
          this.AT.push(this.details[i]);
          localStorage.setItem('AT', JSON.stringify(this.AT));
          // console.log("ATation and participation", JSON.parse(localStorage.getItem("AT")));
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
