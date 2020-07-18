import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from 'src/app/shared/services/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
  }

}
