// NgModule is a directive (function that will run when it is compiled in the App) 
// used to get and set values and validation of the form control fields like <input> or <select>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// since HTTP is a module, you need to put it in the imports at the bottom
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
// when ever you create a new component, you need to import it
// when using the Angular CLI, it autimatically imports them when creating them
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoitemComponent } from './components/todoitem/todoitem.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // services you want to include
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
