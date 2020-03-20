import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-findplace',
  templateUrl: './findplace.component.html',
  styleUrls: ['./findplace.component.css']
})
export class FindplaceComponent implements OnInit {
  findplace: any;

  constructor(private findPlaceService: ApiService) { }

  ngOnInit(){

  }
  getPlaces(data){
    this.findPlaceService.getPlaces().subscribe((data)=>(
      console.log(data)
    ))
  }
  
  }


