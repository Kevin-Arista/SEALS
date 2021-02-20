import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component'
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  // {path : '', component: AppComponent},
  {path : 'contact', component: ContactComponent},
  {path : '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
