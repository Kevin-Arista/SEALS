import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../shared/services/api-data.service';

@Component({
  selector: 'app-journal-history',
  templateUrl: './journal-history.component.html',
  styleUrls: ['./journal-history.component.scss']
})
export class JournalHistoryComponent implements OnInit {

  journalList:any = [];
  constructor(public _apiService: ApiDataService) { }

  ngOnInit(): void {
    this.getAllJournals()
  }

  getAllJournals(){
    this._apiService.getJournals();
    this._apiService.listOfJournalsObs
    .subscribe(data => {
      this.journalList = data;
      console.log(this.journalList);
    });
  }
}
