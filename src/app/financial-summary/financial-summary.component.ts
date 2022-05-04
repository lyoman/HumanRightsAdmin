import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-financial-summary',
  templateUrl: './financial-summary.component.html',
  styleUrls: ['./financial-summary.component.scss']
})
export class FinancialSummaryComponent implements OnInit {


  adminRoles = JSON.parse(localStorage.getItem("isAdmin"));
  loading: any;
  loading1: any;

  searchText;
  page = 1;
  pageSize = 15;

  userResults = [];

  totalStockOrdered: any;
  totalStockSold: any;

  profitloss: any;
  numberOfOrders: any;
  numberOfQuantity: any;

  totalAmountSold: any;
  totalQuantitySold: any;

  totalAmountBought: any;
  totalQuantityBought: any;

  bought = [];
  sold = [];

  constructor(
    private toastr: ToastrService,
    private apiService: ApiService,
  ) {

  }

  ngOnInit(): void {
    this.getBoughtStock();
    // this.getSoldStock();
  }


  getBoughtStock() {
    this.loading = true;
    this.apiService.GetData('/new_stock/new_stock/?user='+JSON.parse(localStorage.getItem('user_id'))).subscribe(data => {
      this.loading = false;
      console.log('all added stock', data['results']);

      this.bought = data['results'];
      data = data['results'];
      this.totalStockOrdered = data.length;

      const sumall = data.map(item => parseInt(item.amount)).reduce((prev, curr) => prev + curr, 0);
      console.log('amount bought',sumall);

      this.totalAmountBought = sumall;


      const sumall1 = data.map(item => parseInt(item.quantity)).reduce((prev, curr) => prev + curr, 0);
      console.log('quantity bought', sumall1);

      this.totalQuantityBought = sumall1;

      this.getSoldStock();
    },
      err => {
        console.log(err)
        this.loading = false;
        this.toastr.error('Error', err.message);
      }
    );
  }


  getSoldStock() {
    this.loading1 = true;
    this.apiService.GetData('/new_stock/sold_stock_user/?user='+JSON.parse(localStorage.getItem('user_id'))).subscribe(data => {
      this.loading1 = false;
      console.log('user sold stock', data);
      this.sold = data;

      this.totalStockSold = data.length;

      const sumall = data.map(item => parseInt(item.amount)).reduce((prev, curr) => prev + curr, 0);
      console.log(sumall);

      this.totalAmountSold = sumall;


      const sumall1 = data.map(item => parseInt(item.quantity)).reduce((prev, curr) => prev + curr, 0);
      console.log(sumall1);

      this.totalQuantitySold = sumall1;

      this.profitloss = (this.totalAmountSold - this.totalAmountBought);
      console.log("this.profitloss", this.profitloss);
    },
      err => {
        console.log(err)
        this.loading1 = false;
        this.toastr.error('Error', err.message);
      }
    );
  }


}
