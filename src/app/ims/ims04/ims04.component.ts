import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ims04',
  templateUrl: './ims04.component.html',
  styleUrls: ['./ims04.component.scss']
})
export class Ims04Component implements OnInit {

  username = JSON.parse(localStorage.getItem("unique_name"));

  constructor() { }

  ngOnInit(): void {
  }

}
