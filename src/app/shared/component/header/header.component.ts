import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from 'src/app/shared/services/data';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  item$: Observable<Data[]>;
  constructor(private api: DataService) { }

  ngOnInit(): void {

    this.item$ = this.api.readJson('db');

  }

}
