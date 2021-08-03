import { Paging } from './../../models/paging';
import { ArticlesResponse } from './../../models/articles/articlesResponse';

import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Article } from 'src/app/models/articles/articles';

@Component({
  selector: 'app-blog-articles',
  templateUrl: './blog-articles.component.html',
  styleUrls: ['./blog-articles.component.scss'],
})
export class BlogArticlesComponent implements OnInit {
  articles: Article[];
  paging: Paging;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles() {
    this.blogService.getArticles().subscribe((response: ArticlesResponse) => {
      this.articles = response.articles;
      this.paging = response.paging;
    });
  }
}
