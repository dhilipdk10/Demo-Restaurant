import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commonfooter',
  templateUrl: './commonfooter.component.html',
  styleUrls: ['./commonfooter.component.scss'],
})
export class CommonfooterComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {
    const a = null;
  }
  emails: string[] = [];
  emailAddress = '';
  routingByUrl(url: any) {
    this.route.navigateByUrl(url);
  }
  details() {
    this.emails.push(this.emailAddress);
    this.emailAddress = ''; 
  }
}
