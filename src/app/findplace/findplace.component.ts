import { Component} from '@angular/core';
import { ApiService } from '../api.service';
import { googleResults } from '../googleResults';

@Component({
  selector: 'app-findplace',
  templateUrl: './findplace.component.html',
  styleUrls: ['./findplace.component.css']
})

export class FindplaceComponent {
  apiQuery: string = "";
  places: any = []
  columnsToDisplay = ['name', 'address', 'rating', 'price_level'];

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
}
