import { Component, OnInit } from '@angular/core';
import { Article } from '../models/articles/articles';
import { ArticlesResponse } from '../models/articles/articlesResponse';
import { BlogCategory } from '../models/blogCategories';
import { Paging } from '../models/paging';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogCategories: BlogCategory[];
  articles: Article[];
  paging: Paging;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadBlogCategories();
    this.loadArticles();
  }

  loadBlogCategories() {
    this.blogService
      .getBlogCategories()
      .subscribe((response: BlogCategory[]) => {
        this.blogCategories = response;
      });
  }

  loadArticles() {
    this.blogService.getArticles().subscribe((response: ArticlesResponse) => {
      this.articles = response.articles;
      this.paging = response.paging;
      console.log(this.articles);
    });
  }
}
