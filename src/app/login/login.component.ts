import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {HttpClient} from '@angular/common/http'
import { RouterLink, Router } from '@angular/router';
import { APIURL } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  toggleRegister:boolean;

  constructor(private http:HttpClient, private router:Router,private apiService:ApiService ) { }

  ngOnInit() {
    this.apiService.showLogin.subscribe(message => this.toggleRegister = message)
    } 
  


LoginUser(){
let formData = {
  user: {
    username: this.username,
    password: this.password
  }
};
this.http.post<any>(`${APIURL}/api/user/signin`, formData).subscribe(
  res => {
    console.log(res);
    localStorage.setItem('token', res.sessionToken)
    this.router.navigateByUrl('/findplace')
  }
)
}
  showRegister(){
    this.apiService.changeLoginStatus(!this.toggleRegister)
  }
}
