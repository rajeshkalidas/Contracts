import {Component, OnInit} from '@angular/core';
import MUIDataTable from 'mui-datatables';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {Contract} from './Contract.interface';
import {DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private dataService: DataService) {
  }


  toTitleCase(str): string {
    return str
      .replace(/(_|-)/g, ' ')
      .trim()
      .replace(/\w\S*/g, (str2) => str2.charAt(0).toUpperCase() + str2.substr(1))
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
  }

  getColumnNames(data: any[]) {
    return Object.keys(data[0]);
  }

  
}

