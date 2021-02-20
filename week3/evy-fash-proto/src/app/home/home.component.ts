import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'evy-fash-proto';
  email = "";
  constructor() { }

  alertSub(){
    alert( this.email + ' - Has been forwarded to our mailing list' + '\n' + 'Thank you for subscribing');
  }

  ngOnInit(): void {
  }
}
