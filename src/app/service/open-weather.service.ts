import {Injectable} from '@angular/core';
import {ICityForecast} from "../model/model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {


  constructor(private http: HttpClient) {
  }

  handleError(error: any): any {
    console.error(error);
    return error.error;
  }

  getForecastList(city: string): Promise<ICityForecast[]> {
    const url = environment.WEATHER_SERVICE_API + `/${city}`;
    return this.http.get(url).toPromise().catch(this.handleError);
  }

}
