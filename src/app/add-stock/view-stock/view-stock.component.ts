import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-stock',
  templateUrl: './view-stock.component.html',
  styleUrls: ['./view-stock.component.scss']
})
export class ViewStockComponent implements OnInit {


  race: any;
  sold = [];
  loading = false;

  hideMap = "true";

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getOnePackage(this.route.snapshot.paramMap.get('id'));
  }

  hidMap(id) {
    this.hideMap = id;
  }

  getOnePackage(id){
    this.loading = true;
    this.apiService.GetData('/reportcase/report_case/' + id + '/detail').subscribe(data => {
        console.log("added items", data)
        this.race = data;
        this.loading = false;
        this.toastr.success('Success', ' Data received successfully');
    },
        err => {
            console.log(err)
            this.loading = false;
            this.toastr.error('Error', 'Unable to retrieve data, try again');
        }
    );
  }

//   "url": "https://humanrights.pythonanywhere.com/api/reportcase/report_case/1/detail/",
//   "id": 1,
//   "date_reported": "2022-04-04T16:31:18+02:00",
//   "type_of_violation": "Denied access to social services like Health facilities, School, Markets place",
//   "description_of_victims": "Youth",
//   "names_of_vitims": "Tafara, Kimberly, Chido",
//   "victim_age": "23, 22, 19",
//   "victim_gender": "Famale & Male",
//   "describe_gender": "Two females and one male",
//   "victim_phone_number": "0775078468",
//   "victim_address": "230 Bag, Banket",
//   "description_of_perpetrator": "Artisanal miners ",
//   "motivations_behind_incident": "To instill fear",
//   "what_happened": "DESCRIPTION of what happened",
//   "how_it_happened": "How it happened",
//   "community_description": "Describe the community",
//   "evidence_files": "https://humanrights.pythonanywhere.com/media/transpired_description/logo.png",
//   "location": "Banket",
//   "latitude": "31.23",
//   "longitude": "30.03",
//   "identity_verification": "https://humanrights.pythonanywhere.com/media/identity_verification/banner.jpg",
//   "read_status": false,
//   "active": true,
//   "updated": "2022-04-04T16:37:11.750335+02:00",
//   "timestamp": "2022-04-04T16:37:11.750374+02:00"
// }


}
