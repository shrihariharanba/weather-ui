import {Component, OnInit} from '@angular/core';
import {OpenWeatherService} from "../../service/open-weather.service";
import {ICityForecast} from "../../model/model";

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {

  city: string = "london";

  showData: boolean = true;

  data: Map<string, ICityForecast[]> = new Map<string, ICityForecast[]>();

  constructor(private openWeatherService: OpenWeatherService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.openWeatherService.getForecastList(this.city).then(data => {
      let result = new Map<string, ICityForecast[]>();
      for (let forecast of data) {
        if (result.has(forecast.dateText)) {
          let value = result.get(forecast.dateText);
          if (value != undefined) {
            value.push(forecast);
          }
        } else {
          let value: ICityForecast[] = [];
          value.push(forecast);
          result.set(forecast.dateText, value);
        }
      }
      this.data = result
      this.showData = true;
    }).catch(error => {
      this.showData = false;
      console.error(error);
    })
  }

}
