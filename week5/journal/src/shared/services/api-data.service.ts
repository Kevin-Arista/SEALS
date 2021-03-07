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
  pullJournals() {
    // this function will return the getmovies endpoint from the baseUrl which is imported above (which is our server)
    return this.http.get(`${baseUrl}/get-all-journals`);
  }

  // will get all json data (take all the pulled movies and store it) inisde an observable
  // Populate the observable to have a reference of all movies
  getAllJournals() {
    // we are saying to subscribe(to set) any of the data inside the pullMovies(), 
    // which actaully calls for the data in our express server - which calls for data to the studio ghibli api
    this.pullJournals().subscribe((data: any) => {
      console.log(data);
      // Observable
      // since it is an observable we use next instead of push
      this.listOfJournals.next(data);
    }, (err) => {
      console.log(err);
    })
  }
}
