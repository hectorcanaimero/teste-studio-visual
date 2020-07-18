import { Blog } from './../../services/data';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: any = [];
  @Input() id: number = 0;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.id = this.id + 1;
    }, 300);
  }

}
