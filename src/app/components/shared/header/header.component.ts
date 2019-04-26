import { Component, OnInit } from '@angular/core';
declare const toggleNav: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  onClick() {
    toggleNav();
  }

}
