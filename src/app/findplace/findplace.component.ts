import { Component} from '@angular/core';
import { ApiService } from '../../api.service';
import { googleResults } from '../models/googleResults';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-findplace',
  templateUrl: './findplace.component.html',
  styleUrls: ['./findplace.component.css']
})

export class FindplaceComponent {
  apiQuery: string = ""; 
  places: any = [];
  selected: any = [];
  itineraryName: string;
  recordId: number;
  searchForPlaces: FormGroup;
  submitItinerary: FormGroup;
  itineraries: any = [];
  itinerarySelected: any;

constructor (private placeService: ApiService){
}

ngOnInit() {
  this.placeService.allItineraries()
  .subscribe(response => {
    console.log(response)
    this.itineraries = response
  })
}

search(){
this.placeService.getPlaces(this.apiQuery)
.subscribe((places:googleResults) => {
  this.places = places;
  console.log(this.places);
})
}

onDrop(event: CdkDragDrop<string[]>){
    if(event.previousContainer == event.container) {
      moveItemInArray(event.container.data,
      event.previousIndex,
      event.currentIndex); 
  } else {
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex, event.currentIndex);
  }
  console.log(this.selected)
}

saveItinerary(){
  const eventDetails = JSON.stringify(this.selected)
  this.placeService.postPlaces(eventDetails, this.itineraryName)
  .subscribe((selected) => {
    console.log(selected);
    this.recordId = this.selected.id;
    this.submitItinerary;
  })
}

loadItinerary(){
  const id = this.itinerarySelected
  this.placeService.loadPlaces(id)
  .subscribe(response=>{ 
    console.log(response)   
    this.places = {results: JSON.parse(response.eventDetails)}
  })
}

updateItinerary(){
  const id = this.itinerarySelected
  this.placeService.updatePlaces(id)
  .subscribe(response=>{ 
    console.log(response)   
    this.places = {results: JSON.stringify(response.eventDetails)}
  })
}

deleteItinerary(){
  const id = this.itinerarySelected
  this.placeService.removeItinerary(id)
  .subscribe(response => {
    this.places = {results: JSON.parse(response.eventDetails)}
    console.log(response)
  })
console.log()
}
}
