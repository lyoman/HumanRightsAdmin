import { Router, NavigationEnd } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  is_superuser = JSON.parse(localStorage.getItem('is_superuser'));

  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  showMenu1: string;
  showMenu2: string;
  pushRightClass: string;
  pushRightClass1: string;

  userData = JSON.parse(localStorage.getItem('user'));
  Zimbabwe = this.userData ? this.userData.plantName : '';
  usergroupId = this.userData ? this.userData.usergroupID : '';
  PlantId = this.userData ? this.userData.plantId : '';
  Designation = this.userData ? this.userData.designation : '';
  userName = this.userData ? this.userData.userName : '';

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(
    public router: Router
  ) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    // if (localStorage.getItem('token') == null) {
    //   this.router.navigateByUrl('/login');
    // }
    this.isActive = false;
    this.collapsed = false;
    this.showMenu = '';
    this.showMenu1 = '';
    this.showMenu2 = '';
    this.pushRightClass = 'push-right';
  }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addExpandClass1(element: any) {
    if (element === this.showMenu1) {
      this.showMenu1 = '0';
    } else {
      this.showMenu1 = element;
    }
  }

  addExpandClass2(element: any) {
    if (element === this.showMenu2) {
      this.showMenu2 = '0';
    } else {
      this.showMenu2 = element;
    }
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }
  isToggled1(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass1);
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
    localStorage.removeItem('isLoggedin');
    localStorage.clear();
  }

}
