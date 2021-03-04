// allows us to inject this service into a constructor in a acomponent
import { Injectable } from '@angular/core';
// in order to use Http you need to inject it into the constructor
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // adding url as property to this service
  todosUrl: ''


  // we are calling the HTTP CLIENT
  constructor(private http:HttpClient) { }
  // "getTodos" is called a method
  getTodos(){
    
  }
}
