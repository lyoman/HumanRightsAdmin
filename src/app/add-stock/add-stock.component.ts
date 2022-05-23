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
  fileName = 'ExcelSheet.xlsx';

  constructor(
    private toastr: ToastrService,
    private apiService: ApiService,
  ) {

  }

  ngOnInit(): void {
    this.getResults();
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


  getResults() {
    this.loading = true;
    this.apiService.GetData('/reportcase/report_case').subscribe(data => {
      this.loading = false;
      console.log('all added stock', data['results']);
      this.userResults = data['results'];
    },
      err => {
        console.log(err)
        this.loading = false;
        this.toastr.error('Error', err.message);
      }
    );
  }

}
