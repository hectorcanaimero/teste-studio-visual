import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from 'src/app/shared/services/data';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  item$: Observable<Data[]>;
  constructor(private api: DataService) { }

  ngOnInit(): void {

    this.item$ = this.api.readJson('db');

  }


}
