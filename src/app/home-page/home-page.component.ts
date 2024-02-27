import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  isScrolled: boolean = false;
  modalOpen: boolean = false;

  constructor(
    private animationCtrl: AnimationController,
    private menuCtrl: MenuController,
    private route: Router,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    const a = null;
  }

  async isModalOpen(isOpen: any) {
    this.modalOpen = isOpen;
  }
  @HostListener('window:scroll') onScroll() {
    // Get the current scroll position
    const scrollPosition = window.pageYOffset;

    // Calculate the trigger point (percentage of viewport height)
    const triggerPoint = window.innerHeight * 0.5; // 50% of viewport height

    // Check if scroll position has reached the trigger point
    if (scrollPosition >= triggerPoint) {
      // Delay class addition for 1 second using setTimeout
      setTimeout(() => {
        this.elementRef.nativeElement.classList.add('my-class');
      }, 1000);
    } else {
      // Remove the class if scrolled above the trigger point
      this.elementRef.nativeElement.classList.remove('my-class');
    }
  }
  routingByUrl(url: any) {
    this.modalOpen = false;
    this.route.navigateByUrl(url);
  }
  menuPage() {}
}
