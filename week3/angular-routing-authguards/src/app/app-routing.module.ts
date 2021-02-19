import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Components
import { LoginComponent } from './login/login.component';
import{ AppComponent } from './app.component'
// Create our routes array - it will be an object of components
// name it const because you won't have other routes within your compenents
// We set up our first route here
const  routes: Routes = [
  // using path: '' - you will call a certain compoenet as default
  // "login" is the name of the path you set the module to ex: '/login'
  //  
  {path: '', component: AppComponent },
  // 'login' is the only path we have strictly defined
  {path: 'login', component: LoginComponent}
  // you could possibly have a 'signup' component
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //need to import RouterModule here, after importing it from top
    // saying, whatever view we route to, we will display
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
