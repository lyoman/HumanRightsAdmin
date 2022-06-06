import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../services/api.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {

  adminRoles = JSON.parse(localStorage.getItem("isAdmin"));
  loading: any;

  searchText;
  page = 1;
  pageSize = 15;

  userResults = [];
  userResults1 = [];
  fileName = 'ExcelSheet.xlsx';

  startDate = new Date();
  endDate = new Date();

  checkRange: any;

  constructor(
    private toastr: ToastrService,
    private apiService: ApiService,
  ) {

  }

  ngOnInit(): void {
    this.checkRange = localStorage.getItem("fitDate");
    if (localStorage.getItem("fitDate") == "yes"){
      this.getRangeItems(localStorage.getItem("startDate"), localStorage.getItem("endDate"));
      this.startDate = new Date(localStorage.getItem("startDate"));
      this.endDate = new Date(localStorage.getItem("endDate"));
    } else {
      this.getResults();
    }
  }

  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

  filterDate(start, end){
    this.startDate = start;
    this.endDate = end;
    console.log("start end", start);
    localStorage.setItem("fitDate", "yes");
    localStorage.setItem("startDate", start);
    localStorage.setItem("endDate", end);
    location.reload();
  }


  async getResults() {
    var myCurrentDate = new Date();
    var myPastDate = new Date(myCurrentDate);
    this.startDate = new Date(myPastDate.setDate(myPastDate.getDate() - 30));
    this.loading = true;
    await this.apiService.GetData('/reportcase/report_case').subscribe(data => {
      this.loading = false;
      console.log('all added stock', data['results']);
      this.userResults1 = data['results'];

      for (let i=0; i < data['results'].length; i++) {
        console.log("data[0]", data['results'][i]);
        if (this.startDate <= new Date(data['results'][i]["timestamp"]) && this.endDate >= new Date(data['results'][i]["timestamp"])){
          this.userResults.push(data['results'][i]);
          console.log("print", this.userResults);
        }
      }
      // if()
    },
      err => {
        console.log(err)
        this.loading = false;
        this.toastr.error('Error', err.message);
      }
    );
  }

 async getRangeItems(startDate, endDate) {
  this.loading = true;
  await this.apiService.GetData('/reportcase/report_case').subscribe(data => {
    this.loading = false;
    console.log('all added stock', data['results']);
    this.userResults1 = data['results'];

    for (let i=0; i < data['results'].length; i++) {
      console.log("range data", data['results'][i]);
      if (new Date(startDate) <= new Date(data['results'][i]["timestamp"]) && new Date(endDate) >= new Date(data['results'][i]["timestamp"])){
        this.userResults.push(data['results'][i]);
        console.log("print", this.userResults);
      }
    }
    // if()
  },
    err => {
      console.log(err)
      this.loading = false;
      this.toastr.error('Error', err.message);
    }
  );
 }

}
