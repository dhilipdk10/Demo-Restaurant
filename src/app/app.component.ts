import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonContent, { static: false })
  content!: IonContent;
  modalOpen: boolean = false;
  scrool: boolean = false;
  constructor(
    private route: Router,
    private animationCtrl: AnimationController
  ) {}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  // ngAfterViewInit() {
  //   this.content.scrollEvents = false;
  //   this.content.ionScroll.subscribe((event) => {
  //     // Check if the page is scrolled, and change the background color accordingly
  //     if (event.detail.scrollTop > 0) {
  //       document.documentElement.style.setProperty(
  //         '--ion-background-color',
  //         'transparent'
  //       );
  //     } else {
  //       document.documentElement.style.setProperty(
  //         '--ion-background-color',
  //         'black'
  //       );
  //     }
  //   });
  // }\\
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
