import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JournalHistoryComponent } from './journal-history/journal-history.component';
import { AddJournalComponent } from './add-journal/add-journal.component';

@NgModule({
  declarations: [
    AppComponent,
    JournalHistoryComponent,
    AddJournalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
