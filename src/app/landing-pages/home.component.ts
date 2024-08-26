import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showBanner: boolean = true; // Controls the visibility of the banner

  // This object tracks the visibility state of each dropdown
  isMenuVisible: boolean = false;
  isDropdownVisible: { [key: string]: boolean } = {};

  constructor() { }

  ngOnInit(): void {}

  closeBanner(): void {
    this.showBanner = false; // Hides the banner when called
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  showDropdown(key: string) {
    this.isDropdownVisible[key] = true;
  }

  hideDropdown(key: string) {
    this.isDropdownVisible[key] = false;
  }
}
