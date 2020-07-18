import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  item$: Observable<Data[]>;

  constructor(
    private api: DataService
  ) { }

  ngOnInit(): void {
    this.item$ = this.api.readJson('db');
  }

}
