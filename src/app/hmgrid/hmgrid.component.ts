import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-hmgrid',
  templateUrl: './hmgrid.component.html',
  styleUrls: ['./hmgrid.component.css']
})
export class HmgridComponent implements OnInit {
  toggle: boolean;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.showLogin.subscribe(message => this.toggle = message)

  }

}
