import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JournalHistoryComponent } from './journal-history/journal-history.component';
import { AddJournalComponent } from './add-journal/add-journal.component';
import { DeleteJournalComponent } from './delete-journal/delete-journal.component';

@NgModule({
  declarations: [
    AppComponent,
    JournalHistoryComponent,
    AddJournalComponent,
    DeleteJournalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
