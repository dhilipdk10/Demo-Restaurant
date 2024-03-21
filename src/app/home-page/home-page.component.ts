import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  isScrolled: boolean = false;
  modalOpen: boolean = false;

  constructor(private route: Router) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  async isModalOpen(isOpen: any) {
    this.modalOpen = isOpen;
  }
  routingByUrl(url: any) {
    this.modalOpen = false;
    this.route.navigateByUrl(url);
  }
  menuPage() {}
}
