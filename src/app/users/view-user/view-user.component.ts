import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { formatDate, Location } from '@angular/common';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {


  // format = 'EEEE, MMMM d, yyyy';
  format = 'MMMM d, y, h:mm:ss a zzzz';
  locale = 'en-US';

  user: any;

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (JSON.parse(localStorage.getItem("is_superuser")) != true) {
      this.location.back();
    }
  }

  race = {
    username: this.route.snapshot.paramMap.get('username'),
    email: this.route.snapshot.paramMap.get('email'),
    first_name: this.route.snapshot.paramMap.get('first_name'),
    phone_number: this.route.snapshot.paramMap.get('phone_number'),
    last_name: this.route.snapshot.paramMap.get('last_name'),
    // is_doctor: this.route.snapshot.paramMap.get('is_doctor'),
    medicall_staffer: this.route.snapshot.paramMap.get('medicall_staffer'),
    specialist_area: this.route.snapshot.paramMap.get('specialist_area'),
    is_active: this.route.snapshot.paramMap.get('is_active'),
    is_staff: this.route.snapshot.paramMap.get('is_staff'),
    is_superuser: this.route.snapshot.paramMap.get('is_superuser'),
    timestamp: this.route.snapshot.paramMap.get('timestamp'),
  }

}
