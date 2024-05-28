// nav-bar.component.ts
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  items: MenuItem[];

  constructor() {
    this.items = [
      {label: 'Home', url: '#'},
      {label: 'Shop', url: '#'},
      {label: 'Contact', url: '#'}
    ];
  }
}
