import { Component} from '@angular/core';
import { ApiService } from '../api.service';
import { googleResponse } from '../googleResults'

@Component({
  selector: 'app-findplace',
  templateUrl: './findplace.component.html',
  styleUrls: ['./findplace.component.css']
})

export class FindplaceComponent {
  apiQuery: string = "";
  places: any = []

constructor(public placeService: ApiService){
}

ngOnInit() {}


search(){
this.placeService.getPlaces(this.apiQuery)
.subscribe((places:googleResponse) => {
  this.places = places.results;
  console.log(this.places) 

})
}
}
