import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public httpClient: HttpClient) { }
  
  getPlaces(apiQuery: any){
    let apiUrl = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=${apiQuery}&key=${environment.API_KEY}`
    
    return this.httpClient.get(apiUrl)
  }
}