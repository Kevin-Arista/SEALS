import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'

// We are importing the object "Todo" not the folder "Todos.ts"
// Todos.ts is just the file the object "Todo" is in 
import { Todo } from '../../models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
              //      you bindding todoService to TodoService
              // you can use any data in todoService by doing this.todoService.<any method within that service>
  constructor(private todoService:TodoService) { }

  // it works like the constructor; you use this
  // instead of using the constructor bc the constructor
  // is only used to import services
  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

}
