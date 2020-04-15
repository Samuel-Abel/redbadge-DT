import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment, APIURL } from './environments/environment.prod';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http:HttpClient) { }
  
private loginSource = new BehaviorSubject(true)
showLogin = this.loginSource.asObservable();

changeLoginStatus(showStatus){
  this.loginSource.next(showStatus)
}

  getPlaces(apiQuery: any){
    const apiUrl: string = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=${apiQuery}&key=${environment.API_KEY}` 
    return this.http.get(apiUrl)
  }
  
  postPlaces(selected: string, itineraryName: string) {
    const token=localStorage.getItem("token")
    const httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token
    })
    let body = {
        event:{
        eventDetails: selected,
        itineraryName: itineraryName
      }}
    return this.http.post(`${APIURL}/events/create`, body,
    {
      headers: httpHeaders
    })
  }

  updatePlaces(id: number, selected: any, itineraryName: string):any{
    const token=localStorage.getItem("token")
    const httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token
    })
    let body = {
      event:{
        id: id,
        eventDetails: selected,
        itineraryName: itineraryName
      }
      }
    
    return this.http.put(`${APIURL}/events/update/${id}`, body,
    {
      headers: httpHeaders
    }) 
  }

  placeTypes():any{
    const token=localStorage.getItem("token")
    const httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token
    })
    return this.http.get(`${APIURL}/placeTypes/getAll`, 
    {
      headers: httpHeaders
    })   
  }


  loadPlaces(id: number):any{
    const token=localStorage.getItem("token")
    const httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token
    })
    return this.http.get(`${APIURL}/events/findOne/${id}`, 
    {
      headers: httpHeaders
    })   
  }

    allItineraries():any{
      const token=localStorage.getItem("token")
      const httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token
      })
      return this.http.get(`${APIURL}/events/getAll`, 
      {
        headers: httpHeaders
      })   
      }
  
  removeItinerary(id: number):any{
    const token=localStorage.getItem("token")
    const httpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: token
    })
    return this.http.delete(`${APIURL}/events/delete/${id}`,
  {
    headers: httpHeaders
    })    
  }

}
