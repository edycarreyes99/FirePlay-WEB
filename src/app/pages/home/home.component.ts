import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedTab = 0;

  constructor() {
  }

  ngOnInit() {
  }

  changeTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }

}
