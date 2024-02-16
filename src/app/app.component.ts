import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  modalOpen: boolean = false;
  scrool: boolean = false;
  constructor(
    private route: Router,
    private animationCtrl: AnimationController
  ) {}
  isScrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.scrollY > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  isModalOpen(isOpen: any) {
    this.modalOpen = isOpen;
  }
  enterAnimation = (baseEl: HTMLElement) => {
    const root: any = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'translateX(100%)' },
        { offset: 1, opacity: '0.99', transform: 'translateX(0)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-in')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };
  routingByUrl(url: any) {
    this.modalOpen = false;
    this.route.navigateByUrl(url);
  }
}
