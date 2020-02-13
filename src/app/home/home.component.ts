import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // links = [];
  // activeLink = this.links[0];
  // background = '';
  tabs = ['First', 'Second', 'Third'];
  public selectedTabIndex: number;
  public selectedTabName: string;

  constructor() { }

  ngOnInit() {
    this.setSelectedTab(0);
  }

  tabChanged(index: number) {
    this.setSelectedTab(index);
  }

  public setSelectedTab(index: number) {
    this.selectedTabIndex = index;
    console.log('Selected Tab Index: ' + this.selectedTabIndex);
    this.selectedTabName = this.tabs[index];
    console.log('Selected Tab Name: ' + this.selectedTabName);
  }

  // toggleBackground() {
  //   this.background = this.background ? '' : 'primary';
  // }

  // addLink() {
  //   this.links.push(`Link ${this.links.length + 1}`);
  // }
}
