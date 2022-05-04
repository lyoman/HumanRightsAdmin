import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { formatDate, Location } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  // format = 'EEEE, MMMM d, yyyy';
  format = 'MMMM d, y, h:mm:ss a zzzz';
  locale = 'en-US';

  race = [];

  user: any;

  loading: any;

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private location: Location,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getResults(JSON.parse(localStorage.getItem('user_id')))
    // if(JSON.parse(localStorage.getItem("isAdmin")) != true) {
    //   this.location.back();
    // }
  }
  // users/user_detail/

  // race = {
  //   username: this.route.snapshot.paramMap.get('username'),
  //   email: this.route.snapshot.paramMap.get('email'),
  //   first_name: this.route.snapshot.paramMap.get('first_name'),
  //   phone_number: this.route.snapshot.paramMap.get('phone_number'),
  //   last_name: this.route.snapshot.paramMap.get('last_name'),
  //   is_doctor: this.route.snapshot.paramMap.get('is_doctor'),
  //   is_specialist: this.route.snapshot.paramMap.get('is_specialist'),
  //   is_physician: this.route.snapshot.paramMap.get('is_physician'),
  //   is_active: this.route.snapshot.paramMap.get('is_active'),
  //   is_staff: this.route.snapshot.paramMap.get('is_staff'),
  //   is_superuser: this.route.snapshot.paramMap.get('is_superuser'),
  //   timestamp: this.route.snapshot.paramMap.get('timestamp'),
  // }

  getResults(id) {
    this.loading = true;
    this.apiService.GetData('/users/user_detail/'+id).subscribe(data => {
      this.loading = false;
      // console.log('user data', data);
      this.race = data;
    },
      err => {
        console.log(err)
        this.loading = false;
        this.toastr.error('Error', err.message);
      }
    );
  }


}
