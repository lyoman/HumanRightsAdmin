import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-sold',
  templateUrl: './view-sold.component.html',
  styleUrls: ['./view-sold.component.scss']
})
export class ViewSoldComponent implements OnInit {

race: any;
  sold: any;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getOnePackage(this.route.snapshot.paramMap.get('id'));('');
  }

  getOnePackage(id){
    this.loading = true;
    this.apiService.GetData('/new_stock/sold_stock/' + id + '/detail').subscribe(data => {
        console.log("sold_stock items", data)
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
