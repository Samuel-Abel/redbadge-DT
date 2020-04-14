import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { Signup } from '../models/signup';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  toggleLogin:boolean;
  
  constructor(private http:HttpClient, private router:Router, private apiService:ApiService) { }

ngOnInit() {
  this.apiService.showLogin.subscribe(message => this.toggleLogin = message)
  }


SignupUser(){
  const httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })
  let formData={
    user: {
      username:this.username,
      password:this.password,
      first_name:this.firstname,
      last_name:this.lastname,
      email:this.email,
    }
};
    this.http.post(`${APIURL}/api/user/create`, formData,{headers: httpHeaders}).subscribe(
    (res: Signup) => {  
    console.log(res);
    localStorage.setItem('token',res.sessionToken)
    this.router.navigateByUrl('/findplace')
    },
    err=> console.log(err)
    );
  }
  showLogin(){
    this.apiService.changeLoginStatus(!this.toggleLogin)
  }
}