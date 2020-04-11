import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {HttpClient} from '@angular/common/http'
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;


  showLogout: boolean =false


  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.LoginUser()
    if(localStorage.getItem('token')){
      this.showLogout = true
    } 
  }
LoginUser(){
 let formData = {
   user: {
     username: this.username,
     password: this.password
   }
 };
 this.http.post<any>('http://localhost:3000/api/user/signin', formData).subscribe(
   res => {
     console.log(res);
     localStorage.setItem('token', res.sessionToken)
     this.router.navigateByUrl("/findplace")
   },
   err => console.log(err)
 );
  }
}
