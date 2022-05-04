import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ims05',
  templateUrl: './ims05.component.html',
  styleUrls: ['./ims05.component.scss']
})
export class Ims05Component implements OnInit {

  username = JSON.parse(localStorage.getItem("unique_name"));

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
