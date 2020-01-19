import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Contract} from './Contract.interface';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class DataService {
  public data$ = this.http.get('./assets/data.json').pipe(delay(3000));

  constructor(private http: HttpClient) {
  }
 
}
