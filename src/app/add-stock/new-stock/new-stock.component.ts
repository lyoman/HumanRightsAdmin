
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.scss']
})
export class NewStockComponent implements OnInit {

    sobuteco2Form;
    loading = false;
    user: any;

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
            user: JSON.parse(localStorage.getItem('user_id'))
        });
    }

    ngOnInit(): void {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    saveQualityScore() {
        this.loading = true;

        var dataToPost = {
            date: this.sobuteco2Form.get('date').value,
            name: this.sobuteco2Form.get('name').value,
            quantity: this.sobuteco2Form.get('quantity').value,
            description: this.sobuteco2Form.get('description').value,
            amount: this.sobuteco2Form.get('amount').value,
            user: this.sobuteco2Form.get('user').value,
        };

        this.appService.PostData('/new_stock/new_stock/new/', dataToPost).subscribe(
            (data) => {
                this.loading = false;
                this.toastr.success('Success', 'Stock saved successfully');
                this.location.back();

            },
            (err) => {
                this.loading = false;
                this.toastr.error('Error', err.message);
            }
        );
    }

}
