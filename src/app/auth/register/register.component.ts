import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = null;
  password = null;
  passwordConfirm = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    if(this.password != this.passwordConfirm){
      alert('Senhas divergentes');
      return;
    }
    this.authService.createAccount(this.email, this.password).subscribe((value: any) => {
      localStorage.setItem('token', value.idToken);

      this.authService.setUser({
        id: value.localId,
        email: value.email,
      });
      alert('Usuário criado com sucesso!');
    });
  }
}

