import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-view-organograms',
  templateUrl: './view-organograms.component.html',
  styleUrls: ['./view-organograms.component.scss']
})
export class ViewOrganogramsComponent implements OnInit {

  race: any;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getOnePackage(this.route.snapshot.paramMap.get('id'));
  }

  getOnePackage(id){
    this.apiService.GetData('/ims_04/organograms/' + id + '/detail').subscribe(data => {
        console.log(data)
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
}
