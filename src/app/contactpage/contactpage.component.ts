import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss'],
})
export class ContactpageComponent implements OnInit {
  // email: any = support@gmail.com ;
  constructor() {}

  pageReload(event: Event) {
    event.preventDefault();
    console.log('Submit button clicked');
  }
  ngOnInit() {
    const a = null;
  }
}
