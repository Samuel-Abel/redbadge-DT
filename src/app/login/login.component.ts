import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;


  showLogout: boolean =false
  showLogin: boolean =true
  router: any;


  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.LoginUser()
    if(localStorage.getItem('token')){
      this.showLogout = true
      this.showLogin = false
    }
  }
LoginUser(){
let formData = {
  user: {
    username: this.username,
    password: this.password
  }
};
this.http.post<any>('http://localhost:3000/api/user/signin', formData)
.subscribe(
  res => {
    console.log(res);
    localStorage.setItem('token', res.sessionToken)
    this.router.link(["findplace"])
  },
  err => console.log(err)
  );
}
}
