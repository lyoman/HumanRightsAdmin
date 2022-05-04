import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-ims08',
  templateUrl: './ims08.component.html',
  styleUrls: ['./ims08.component.scss']
})
export class Ims08Component implements OnInit {

  username = JSON.parse(localStorage.getItem("unique_name"));

  constructor(

  ) { }

  ngOnInit(): void {

  }

}
