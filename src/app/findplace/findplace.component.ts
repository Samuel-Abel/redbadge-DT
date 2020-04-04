import { Component} from '@angular/core';
import { ApiService } from '../../api.service';
import { googleResults } from '../models/googleResults';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { eventResults } from '../models/eventResults';

@Component({
  selector: 'app-findplace',
  templateUrl: './findplace.component.html',
  styleUrls: ['./findplace.component.css']
})

export class FindplaceComponent {
  apiQuery: string = ""; 
  places: any = [];
  selected: any = [];
  itineraryName: string 

constructor(public placeService: ApiService){
}

ngOnInit() {}

search(){
this.placeService.getPlaces(this.apiQuery)
.subscribe((places:googleResults) => {
  this.places = places;
  console.log(this.places) 
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
    
    console.log(selected)
  })
}

loadItinerary(){
  console.log()
}

deleteItinerary(){
  console.log()
}
}
