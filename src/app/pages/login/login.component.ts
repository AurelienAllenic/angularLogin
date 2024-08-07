import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: Login;
  constructor(private http: HttpClient){
    this.loginObj= new Login();
  }

  onLogin(form: NgForm) {
    this.http.get<any[]>('http://localhost:3000/users').subscribe((users) => {
      const user = users.find(u => u.EmailId === this.loginObj.EmailId && u.Password === this.loginObj.Password);
      if (user) {
        alert("Login success");
      } else {
        alert("Invalid credentials");
      }
      form.reset()
    });
  }
}

export class Login {
    EmailId: string;
    Password: string;
    constructor(){
      this.EmailId='';
      this.Password='';
    }
}