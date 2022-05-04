
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-sold-stock',
  templateUrl: './new-sold-stock.component.html',
  styleUrls: ['./new-sold-stock.component.scss']
})
export class NewSoldStockComponent implements OnInit {

  sobuteco2Form;
  loading = false;
  user: any;

  userAddded = [];

  constructor(
    private location: Location,
    private toastr: ToastrService,
    private appService: ApiService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.sobuteco2Form = this.formBuilder.group({
      date: new Date(),
      name: '',
      quantity: 0,
      amount: 0,
      description: '',
      quantity_left: '0',
      total_amount: 0,
      user: JSON.parse(localStorage.getItem('user_id'))
    });
  }

  ngOnInit(): void {
    this.getResults1();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  saveQualityScore() {
    this.loading = true;

    var dataToPost = {
      date: this.sobuteco2Form.get('date').value,
      stockname: this.sobuteco2Form.get('name').value,
      quantity: this.sobuteco2Form.get('quantity').value,
      description: this.sobuteco2Form.get('description').value,
      amount: this.sobuteco2Form.get('amount').value,
      quantity_left: this.sobuteco2Form.get('quantity_left').value,
      total_amount: this.sobuteco2Form.get('total_amount').value,
      user: this.sobuteco2Form.get('user').value,
    };

    this.appService.PostData('/new_stock/sold_stock/new/', dataToPost).subscribe(
      (data) => {
        this.loading = false;
        this.toastr.success('Success', 'Stock saved successfully');
        this.location.back();

      },
      (err) => {
        this.loading = false;
        this.toastr.error('Error', err.message);
        console.log("err.message", err.message);
      }
    );
  }

  getResults1() {
    this.loading = true;
    this.appService.GetData('/new_stock/new_stock/?user=' + JSON.parse(localStorage.getItem('user_id'))).subscribe(data => {
      this.loading = false;
      console.log('all added stock', data['results']);
      this.userAddded = data['results'];
    },
      err => {
        console.log(err)
        this.loading = false;
        this.toastr.error('Error', err.message);
      }
    );
  }

}
