import { Component} from '@angular/core';
import { ApiService } from '../api.service';
import { googleResults } from '../googleResults';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-findplace',
  templateUrl: './findplace.component.html',
  styleUrls: ['./findplace.component.css']
})

export class FindplaceComponent {
  apiQuery: string = "";
  places: any = [];
  itinerary: any = [];
  selected: any =[]

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

}

saveItinerary(){
  
}
}
