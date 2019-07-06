import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/typings/todo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private pContador = new BehaviorSubject(0);

  contador = this.pContador.asObservable();

  constructor(private httpClient: HttpClient) { }

  getTodos(userId): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('http://localhost:3000/users/' + userId + '/todos');
  }

  aumentar() {
    this.pContador.next(this.pContador.value + 1);
  }

  diminuir() {
    this.pContador.next(this.pContador.value - 1);
  }

  adicionaTodo(todo: Todo) {
    return this.httpClient.post('http://localhost:3000/todos', todo);
  }

  getTodo(id) {
    return this.httpClient.get('http://localhost:3000/todos/' + id);
  }

  updateTodo(id, todo) {
    return this.httpClient.put('http://localhost:3000/todos/' + id, todo);
  }

  deleteTodo(id){
    return this.httpClient.delete('http://localhost:3000/todos/' + id);
  }
}