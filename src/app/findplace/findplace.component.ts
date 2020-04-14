import { Component} from '@angular/core';
import { ApiService } from '../../api.service';
import { googleResults } from '../models/googleResults';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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
  submitItinerary: any;
  itineraries: any = [];
  itinerarySelected: any;
  eventDetails: any;
  placeType: any;
  showUpdateButton: boolean = false;
  showDeleteButton: boolean = false;
  isDisabled: boolean = true;
  location: string;

constructor (private placeService: ApiService){
}

ngOnInit() {
  this.onLoad()
}

onLoad(){
  this.placeService.allItineraries()
  .subscribe(response => {
    console.log(response)
    this.itineraries = response
  })
}

search(){
const apiQuery = (this.placeType+" ,"+this.location)
this.placeService.getPlaces(apiQuery)
.subscribe((places:googleResults) => {
  this.isDisabled = false;
  this.places = places;
  console.log(this.places);
this.placeType = ""
this.location = ""
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
    this.places = [];
    this.onLoad();
    this.isDisabled = true
  })
}

loadItinerary(){
  this.places.results = []
  const id = this.itinerarySelected
  this.placeService.loadPlaces(id)
  .subscribe(response=>{ 
    console.log(response)   
    this.selected =  JSON.parse(response.eventDetails)
    this.itineraryName = this.itineraryName
    this.showUpdateButton = true
    this.showDeleteButton = true
    this.isDisabled = true
  })
}

updateItinerary(){
  const id = this.itinerarySelected
  const eventDetails = JSON.stringify(this.selected)
  this.placeService.updatePlaces(id, eventDetails, this.itineraryName)
  .subscribe(selected=>{ 
    console.log(selected)  
    this.submitItinerary
    this.onLoad()
    this.showUpdateButton = false
    this.showDeleteButton = false
    this.isDisabled = true
  })
}

deleteItinerary(){
  const id = this.itinerarySelected
  this.placeService.removeItinerary(id)
  .subscribe(response=>{
    console.log("itinerary deleted")
    this.onLoad()
    this.selected = []
    this.showUpdateButton = false
    this.showDeleteButton = false
    this.isDisabled = true
  })
}
clearItinerary(){
  this.selected = []
  this.onLoad()
  this.itineraryName = null
  this.itinerarySelected = null
  this.places = []
  this.showUpdateButton = false
  this.showDeleteButton = false
  this.isDisabled = true
}
}
