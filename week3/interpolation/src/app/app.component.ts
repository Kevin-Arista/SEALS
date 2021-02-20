import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interpolaion';
  firstName = 'Kevin';
  lastName = 'Arista';
  // What do we need from the user?
  age = '';
  // One way data binding
  todos = ['East Breakfast', 'Take a shower', 'Code Challenge'];
  imageShows = false;

  displayImage() {
    // to call a variable that is out of the function's scope use "this" to call for an outside variable
    this.imageShows = true;
    // we are reassigning the value of imageShows - which is deafult stated as false in line:16 
  }


  // displayAge() {
  //   let 
  // }
}
