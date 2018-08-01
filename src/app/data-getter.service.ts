import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: "root"
})
export class DataGetterService {
  private url =
    // tslint:disable-next-line:max-line-length
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=demo";

  constructor(private _http: Http) {
    console.log("I ran perfectly");
  }

  log(msg, result): void {
    console.log(msg, result);
  }

  handleError(text, arr): void {
    console.log(text, arr);
  }

  public getData(): Observable<any> {
    return this._http.get(this.url).pipe(result => result);
  }

  // public makeServiceCall: Observable (){

  //   return Observable;
  // }
}
