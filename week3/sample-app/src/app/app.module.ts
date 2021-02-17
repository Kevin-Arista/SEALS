import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [], //inport any firewall ex: mongodb
  bootstrap: [AppComponent]
})
export class AppModule { }