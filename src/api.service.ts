import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from './environments/environment.prod';
import { eventResults } from '././app/models/eventResults'

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http:HttpClient) { }
  
  getPlaces(apiQuery: any){
    const apiUrl: string = `http://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=${apiQuery}&key=${environment.API_KEY}` 
    return this.http.get(apiUrl)
  }
  
  postPlaces(selected: string, itineraryName: string) {
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg2MDA2OTExLCJleHAiOjE1ODYwOTMzMTF9.q7vtcjIDPE9eIqN7dLxkIIVPZ0vGbrN8f74HOZEUaCY"
    })
        
    let body = 
      {
        event:{
        eventDetails: selected,
        eventName: itineraryName
      }
    }

    return this.http.post("http://localhost:3000/events/create", body,
    {
      headers: httpHeaders
    
    })
  }
} 
