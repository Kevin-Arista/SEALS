import { FormStyle, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Store data using this array
  public todos = [''];
  // How will you take the input
   input = ''
  // Add functions as you fit!
  recordText(){
    // How do add data to an array in js? hint: search .push()
     this.todos.push(this.input);
  }

  // This will reset to empty the input box
  deleteInput(){
    this.input = ''
  }

  keyDown13(event) {
    if (event.keyCode === 13) {
      this.todos.push(this.input);
      this.input = ''
    }
  }
}