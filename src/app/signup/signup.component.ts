import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { Signup } from '../models/signup';

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
  
  constructor(private http:HttpClient) { }

ngOnInit() {
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
    sessionStorage.setItem('token',res.sessionToken)
    },
    err=> console.log(err)
    );
  }
}






// import { Component, OnInit } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
// import { APIURL } from 'src/environments/environment.prod';
// import { Signup } from '../models/signup';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {

// username: string;
// password: string;
// firstname: string;
// lastname: string;
// email: string;
// role: string;



