import { Component } from '@angular/core';
import { Router } from '@angular/router'
// will allow us to veiw what we will route, and the other helps us create the link
// Router will sccess any pgae we want
@Component({
  selector: 'app-root',
  // Use the tilde to call for your template, dont use templateUrl
  template: `<h1>app works here</h1> <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-routing-authguards';
  // seting  it provate, giving the name of "router"
 
}