import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
role: string;

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  SignupUser(){
    let formData={
      user: {
        username:this.username,
        password:this.password,
        firstname:this.firstname,
        lastname:this.lastname,
        email:this.email
      }
    };
    this.http.post<any>('http://localhost:3000/api/user/create', formData).subscribe(
    res => {  
    console.log(res);
    localStorage.setItem('token', res.sessionToken)
    this.router.navigateByUrl("/findplace")
    },
    err=> console.log(err)
    );
  }

}
