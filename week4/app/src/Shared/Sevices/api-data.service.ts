import { Injectable } from '@angular/core';
// let us create observables by setting the classes with a behavior observable, hence making it an observable
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// we set baseUrl to 'http...' because the express server we are using runs on port 8080
// Note: this angular app is running on port 4200
// Hence is the reason why you should have 2 terminals to run both servers
const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})

// export is a keyword - used to say that ApiDataService (class) can be used anywhere
// in this case we will use it inside the app.component.ts
export class ApiDataService {

  // BehaviorSubject creates a reference to all data (movies) we have
  // we are creating a new insatnce(listOfMovies) of BehaviorSubect of type: [] or list/array
  private listOfMovies = new BehaviorSubject([]);
  // how can we transfer this data(list of movies) without any insecurities?
  //  we create an observable, which is a list of refernce of the data
  // we are creating an obserable containing the BehaviorSubject with a property 'asObservable' to cast/view it as a observable
  // an observable is anuthing in our database that we will reference wo be able to use in our angular app
  public listOfMoviesObs = this.listOfMovies.asObservable();

  constructor(
    // we use/call the imported HttpClient here
    // we create an instance of HttpClient; which means to create a class for a bigger class
    public http: HttpClient
  ) { }

  // this fxn just makes  arequest to our express server (runing on port 8080)
  // the express server is what makes a request to the actual Ghibli API (remember: our express server was "importing" a premade API)
  pullMovies() {
    // this function will return the getmovies endpoint from the baseUrl which is imported above (which is our server)
    return this.http.get(`${baseUrl}/get-movies`);
  }

  pullOneMovie(incomingData) { 
    return this.http.post(`${baseUrl}/get-one-movie`, incomingData);
  }

  pullOneMovie2(incomingData) { 
    return this.http.post(`${baseUrl}/get-one-movie-title`, incomingData);
  }

  // will get all json data (take all the pulled movies and store it) inisde an observable
  // Populate the observable to have a reference of all movies
  getAllMovies() {
    // we are saying to subscribe(to set) any of the data inside the pullMovies(), 
    // which actaully calls for the data in our express server - which calls for data to the studio ghibli api
    this.pullMovies().subscribe((data: any) => {
      console.log(data);
      // Observable
      // since it is an observable we use next instead of push
      this.listOfMovies.next(data);
    }, (err) => {
      console.log(err);
    })
  }
}
