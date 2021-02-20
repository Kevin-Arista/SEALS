import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fname = '';
  lname = '';
  email = '';
  phonenumber = '';
  subject = '';

  alertMsg(){
    alert( 'Subject: ' + this.subject + '\n' + 'Hello ' + this.fname + ' ' + this.lname + ',' + '\n' + 'Your message has been heard and will not be forwarded to Evy Fashion' + 'Have a nice rest of your day!');
  }
  
  

  constructor() { }

  ngOnInit(): void {
  }
}
