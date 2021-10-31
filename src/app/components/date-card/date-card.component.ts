import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ICityForecast} from "../../model/model";

@Component({
  selector: 'app-date-card',
  templateUrl: './date-card.component.html',
  styleUrls: ['./date-card.component.css']
})
export class DateCardComponent implements OnInit {
  public data: Map<string,ICityForecast[]> = new Map<string, ICityForecast[]>()
  @Input() set forecasts(data: Map<string,ICityForecast[]>){
    this.data = data;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
