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
  loading2 = false;

  profitloss: any;

  totalAmount = 0;
  totalQuantitySold = 0;

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
    this.apiService.GetData('/new_stock/new_stock/' + id + '/detail').subscribe(data => {
        console.log("added items", data)
        this.race = data;
        this.loading = false;
        this.getOneSold(this.route.snapshot.paramMap.get('id'));
        this.toastr.success('Success', ' Data received successfully');
    },
        err => {
            console.log(err)
            this.loading = false;
            this.toastr.error('Error', 'Unable to retrieve data, try again');
        }
    );
  }

    getOneSold(id){
      this.loading2 = true;
    this.apiService.GetData('/new_stock/sold_stock/?stockname=' + id).subscribe(data => {
        console.log("sold items", data);
        this.sold = data;

      const sumall = data.map(item => parseInt(item.amount)).reduce((prev, curr) => prev + curr, 0);
      console.log(sumall);

      this.totalAmount = sumall;


      const sumall1 = data.map(item => parseInt(item.quantity)).reduce((prev, curr) => prev + curr, 0);
      console.log(sumall1);

      this.totalQuantitySold = sumall1;

      this.profitloss = (this.totalAmount - this.race.amount);

        // if(data.length > 0) {
        //   for (let j = 0; j<=data.length; j++) {
        //     // console.log("sold items amount", this.sold[j].amount);
        //     this.totalAmount = (this.totalAmount + this.sold[j]['amount']);
        //   }

        //   for (let i = 0; i<=data.length; i++) {
        //     this.totalQuantitySold = this.totalQuantitySold + parseInt(data[i].quantity);
        //   }
        // }



        this.loading2 = false;
        this.toastr.success('Success', ' Data received successfully');
    },
        err => {
            console.log(err)
            this.loading2 = false;
            this.toastr.error('Error', 'Unable to retrieve data, try again');
        }
    );
  }


}
