import { Component, OnInit, HostListener } from '@angular/core';
declare const toggleNav: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  d = document;

  constructor() { }

  ngOnInit() {

  }

  onClick() {
    toggleNav();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const navbar = this.d.querySelector('.navbar');
    const top = event.srcElement.scrollingElement.scrollTop > 100 || document.documentElement.scrollTop > 100;

    if (top) {
      navbar.classList.add('--scroll');
    } else {
      navbar.classList.remove('--scroll');
    }
  }

}
