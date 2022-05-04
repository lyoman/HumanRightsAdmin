import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-sell-stock',
  templateUrl: './sell-stock.component.html',
  styleUrls: ['./sell-stock.component.scss']
})
export class SellStockComponent implements OnInit {

adminRoles = JSON.parse(localStorage.getItem("isAdmin"));
  loading: any;

  searchText;
  page = 1;
  pageSize = 15;

  userResults = [];
  userAddded = [];

  constructor(
    private toastr: ToastrService,
    private apiService: ApiService,
  ) {

  }

  ngOnInit(): void {
    // this.getResults1();
    this.getResults();
  }


  getResults() {
    this.loading = true;
    this.apiService.GetData('/new_stock/sold_stock_user/?user='+JSON.parse(localStorage.getItem('user_id'))).subscribe(data => {
      this.loading = false;
      console.log('user sold stock', data);
      this.userResults = data;
    },
      err => {
        console.log(err)
        this.loading = false;
        this.toastr.error('Error', err.message);
      }
    );
  }


}
