import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Thiago';
  items = ['Ruby', 'Java', 'Javascript', 'Angular', 'Node'];

  ngOnInit() {
    setTimeout (() => {
      this.title = 'Morais';
    }, 2000);
  }

  novoItem() {
    const text = prompt('Digite seu nome');

    this.items.push(text);
  }
}
