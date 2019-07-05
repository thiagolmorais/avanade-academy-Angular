import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
  cep = {};
  
  constructor(private cepService: CepService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      console.log(params.numero);
      this.cepService.getCep(params.numero).subscribe(value => {
        console.log(value);
        this.cep = value;
      });
    });
  }

}
