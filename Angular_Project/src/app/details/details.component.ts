import { Component } from '@angular/core';
import { HttpService } from '../services/Http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  public SelectedNews:any
  constructor(public service:HttpService){


    this.SelectedNews = this.service.selectObject
  }
}
