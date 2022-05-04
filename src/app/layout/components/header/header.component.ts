import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public pushRightClass: string;
    public firstName: string;
    public lastName: string;
    public username: string;
    public user: any;

    userData = JSON.parse(localStorage.getItem('user'));
    Zimbabwe = this.userData ? this.userData.plantName : '';
    usergroupId = this.userData ? this.userData.usergroupID : '';
    PlantId = this.userData ? this.userData.plantId : '';
    Designation = this.userData ? this.userData.designation : '';
    userName = this.userData ? this.userData.userName : '';

    constructor(
      public router: Router,
      ) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        if(localStorage.getItem('token') == null){
            this.router.navigateByUrl('/auth/login');
        }
        this.pushRightClass = 'push-right';
        this.user = JSON.parse(localStorage.getItem('user'));
        // console.log("user", this.user);
        // this.firstName = this.user.firstName;
        // this.lastName = this.user.lastName;
        this.firstName = "Leo";
        this.lastName = "Muchenje";
        this.username = JSON.parse(localStorage.getItem("unique_name"));
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.clear();
        this.router.navigateByUrl('/auth/login');
    }

}
