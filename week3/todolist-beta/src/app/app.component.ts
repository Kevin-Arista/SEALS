import { Component } from '@angular/core';


// decorator - contains "metadata"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist-beta';
  // you use typescript when defining the type of the variable with :
  // it is recommended to use types
  // name:string = "Kevin";
  // we can use the "constructor" method
  // it will run the code when initialized
  // constructor() {
    //it will literaly be logged in console before stating that it "live reloads"
    // console.log(123);
    // "this" is a method that is used to call any variable outside the scope of a functions
    // excpet variables that are inside a function, bc those have only that specific function's scope
    // this.name = "TED";
  //}
}
