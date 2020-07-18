import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../../services/data';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

  item$: Observable<Data[]>;
  constructor(private api: DataService) { }

  ngOnInit(): void {

    this.item$ = this.api.readJson('db');

  }

}
