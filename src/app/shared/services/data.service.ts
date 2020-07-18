import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  readJson(file): Observable<Data[]> {
    return this.http.get<Data[]>(`./assets/data/${file}.json`)
    .pipe(tap(data => data), take(200));
  }
}
