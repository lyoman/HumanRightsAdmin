import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ims06',
  templateUrl: './ims06.component.html',
  styleUrls: ['./ims06.component.scss']
})
export class Ims06Component implements OnInit {

  username = JSON.parse(localStorage.getItem("unique_name"));
  loading: any;
  details = [];

  choosenDpt: any;
  OTHER = [];
  BF = [];
  ACTs = [];
  IMSOT = [];
  COR = [];
  IBRA = [];
  BRA = [];


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
    this.apiService.GetData('/ims_06/ims_06/?department=SHE').subscribe(data => {
      this.loading = false;
      // console.log('all ' + dpt, data['results']);
      this.details = data['results'];

      for (let i=0; i<this.details.length; i++) {
        if(this.details[i]['category'] == "Compliance Obligations Register") {
          this.COR.push(this.details[i]);
          localStorage.setItem('COR', JSON.stringify(this.COR));
          // console.log("she policy", JSON.parse(localStorage.getItem("COR")));
        }

        if(this.details[i]['category'] == "ACTs") {
          this.ACTs.push(this.details[i]);
          localStorage.setItem('ACTs', JSON.stringify(this.ACTs));
          // console.log("Legal and IMS appointments", JSON.parse(localStorage.getItem("ACTs")));
        }

        if(this.details[i]['category'] == "IMS Objectives and targets") {
          this.IMSOT.push(this.details[i]);
          localStorage.setItem('IMSOT', JSON.stringify(this.IMSOT));
          // console.log("IMSOTation and participation", JSON.parse(localStorage.getItem("IMSOT")));
        }

        if(this.details[i]['category'] == "Issue Based Risk Assessment") {
          this.IBRA.push(this.details[i]);
          localStorage.setItem('IBRA', JSON.stringify(this.IBRA));
          // console.log("Legal and IMS appointments", JSON.parse(localStorage.getItem("IBRA")));
        }


        if(this.details[i]['category'] == "Baseline Risk Assessment (BRA)") {
          this.BRA.push(this.details[i]);
          localStorage.setItem('BRA', JSON.stringify(this.BRA));
          // console.log("Legal and IMS appointments", JSON.parse(localStorage.getItem("BRA")));
        }

        if(this.details[i]['category'] == "Other") {
          this.OTHER.push(this.details[i]);
          localStorage.setItem('OTHER', JSON.stringify(this.OTHER));
          // console.log("Legal and IMS appointments", JSON.parse(localStorage.getItem("OTHER")));
        }

        if(this.details[i]['category'] == "Blank forms") {
          this.BF.push(this.details[i]);
          localStorage.setItem('BF', JSON.stringify(this.BF));
          // console.log("Legal and IMS appointments", JSON.parse(localStorage.getItem("BF")));
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
