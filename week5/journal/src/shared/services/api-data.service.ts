import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})

export class ApiDataService {
  private listOfJournals = new BehaviorSubject([]);
  public listOfJournalsObs = this.listOfJournals.asObservable();

  constructor(
    public http: HttpClient
  ) { }

  createNewJournal(incomingData: any) {
    return this.http.post(`${baseUrl}/add-one-journal`, incomingData);
  }

  deleteAJournal(incomingData: any) {
    return this.http.post(`${baseUrl}/remove-by-title`, incomingData);
  }

  pullAllJournals(){
    return this.http.get(`${baseUrl}/get-all-journals`)
  }

  getJournals() {
    this.pullAllJournals().subscribe((data: any) => {
      this.listOfJournals.next(data);
    }, (err) => {
      console.log(err);
    })
  }

}