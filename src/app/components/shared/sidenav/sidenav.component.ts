import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleSideNav() {;
    const sidenav = document.querySelector('.sidenav');
    sidenav.classList.toggle('open');
  }

}
