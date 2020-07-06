import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  links: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.links = [
      {name: 'Home', url: '/#landing-page', value: 'landing-page'},
      {name: 'About', url: '/#about-page', value: 'about-page'},
      {name: 'Works', url: '/#works-page', value: 'works-page'}
    ];
  }

  changeNav(link: any): void {
    console.log('this is the clicked link: ', link);
  }

}
