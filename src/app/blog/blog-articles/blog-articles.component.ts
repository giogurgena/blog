import { Component, Input } from '@angular/core';
import { Paging } from './../../models/paging';

import { Articles } from 'src/app/models/articles/articles';

@Component({
  selector: 'app-blog-articles',
  templateUrl: './blog-articles.component.html',
  styleUrls: ['./blog-articles.component.scss'],
})
export class BlogArticlesComponent {
  @Input() articles: Articles[];
  @Input() paging: Paging;

  constructor() {}
}
