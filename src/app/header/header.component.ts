import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo: string = '../assets/img/logo.png';
  pageTitle: string = 'Admin';

  constructor() { }

  ngOnInit() {
  }

}
