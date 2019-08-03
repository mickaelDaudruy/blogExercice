import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postList : Post[]

  constructor() { }

  ngOnInit() {
  }

}
