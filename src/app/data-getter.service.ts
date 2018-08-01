import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: "root"
})
export class DataGetterService {
  constructor(private _http: Http) {}

  log(msg, result): void {
    console.log(msg, result);
  }

  handleError(text, arr): void {
    console.log(text, arr);
  }

  public getData(by): Observable<any> {
    let url = `https://www.alphavantage.co/query?function=${by}&symbol=MSFT&apikey=demo`;
    return this._http.get(url).pipe(result => result);
  }
}
