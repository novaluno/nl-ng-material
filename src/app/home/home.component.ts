import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  selected = new FormControl(0);

  constructor() { }

  ngOnInit() {
  }

  // toggleBackground() {
  //   this.background = this.background ? '' : 'primary';
  // }

  // addLink() {
  //   this.links.push(`Link ${this.links.length + 1}`);
  // }
}
