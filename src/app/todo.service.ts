import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/typings/todo';

@Injectable({
 providedIn: 'root'
})
export class TodoService {

 private pContador = new BehaviorSubject(0);

 contador = this.pContador.asObservable();

 constructor(private httpClient: HttpClient) { }

 getTodos(): Observable<Todo[]> {
   return this.httpClient.get<Todo[]>('http://localhost:3000/todos');
 }

 aumentar() {
   this.pContador.next(this.pContador.value + 1);
 }

 diminuir() {
   this.pContador.next(this.pContador.value - 1);
 }

}