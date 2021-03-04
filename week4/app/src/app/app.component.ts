import { Component, OnInit } from '@angular/core';
// Forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
// Use your api-data service
import { ApiDataService } from '../Shared/Sevices/api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// 'implements' will extened the class into OnInit
// OnInit is later used in at the bottom
export class AppComponent implements OnInit {
  title = 'app';
  public movieList = [];
  public movie = '';
  public selectedMovie: any = [];
  public selectedMovieID = '';
  // telling it we are using a formgroup
  // this is what you will call in your formgroup directive
  public inputGroup: FormGroup;
  public inputGroup2: FormGroup;

  // we are creating an instance of ApiDataService with the variable _apiService
  constructor(public _apiService: ApiDataService, public fb: FormBuilder) { }

  // this is where you implemented the class AppComponent
  // 'ng' is called a webhooker - which is used to signal to run the code, when the app starts
  ngOnInit() {
    this.listenForMovieData();
    //subscirbe
    this._apiService.listOfMoviesObs
    .subscribe((data) =>{
      this.movieList = data;
    })
    this.initForm();
  }

  // a fxn that will get all movies and could be used in app.component.html
  listenForMovieData() {
    this._apiService.getAllMovies();
  }

  // we will tell it we are going to collect an ID
  initForm(){
    this.inputGroup = this.fb.group({
      id: [null, Validators.required]
    })
    this.inputGroup2 = this.fb.group({
      title: [null, Validators.required]
    })
  }

  onFormSubmit() {
    this._apiService.pullOneMovie(this.inputGroup.value)
    // always subscrube the data in order to get the value you are calling
    .subscribe((data:any) => {
      console.log(data);
    })
  }
  onFormSubmit2(){
    let movieName = this.inputGroup2.value.title;
    for (let i = 0; i < 20; i++){
      if (movieName === this.movieList[i].title){
        this.selectedMovieID = this.movieList[i].id;
      }
    }
    let postData = {
      id: this.selectedMovieID
    }
    
    this._apiService.pullOneMovie(postData)
    .subscribe((data: any) =>{
      this.selectedMovie = data;
      console.log(this.selectedMovie);
    });
}
}
