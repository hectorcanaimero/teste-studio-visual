import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../../services/data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  item$: Observable<Data[]>;
  constructor(private api: DataService) { }

  ngOnInit(): void {

    this.item$ = this.api.readJson('db');

  }
}
