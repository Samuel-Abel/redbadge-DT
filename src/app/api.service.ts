import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }
  
  getPlaces(){
    let API_KEY = 'AIzaSyAVOiIQKnLWfWrYJVdjYyKHmnTEcg4K1_Q';
    let apiQuery = "apiQuery"
    let apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${apiQuery}&key=${API_KEY}`
    
    return this.httpClient.get(apiUrl)
  }

  LoginUser(email, password){
    const body={
      email: email,
      password: password
    }
    const reqHeaders= new HttpHeaders({
      "Content-Type": 'application/json'
    })
    return this.httpClient.post<any>('http://localhost:4200/api/user/signin', body, {headers:reqHeaders})
  }

}