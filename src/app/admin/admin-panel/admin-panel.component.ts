import { Article } from './../../models/articles/articles';
import { Component, OnInit } from '@angular/core';
import { BlogCategory } from 'src/app/models/blogCategories';
import { Paging } from 'src/app/models/paging';
import { BlogService } from 'src/app/services/blog.service';
import { ArticlesResponse } from 'src/app/models/articles/articlesResponse';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  adminCategories: BlogCategory[];
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
        this.adminCategories = response;
      });
  }

  loadArticles() {
    this.blogService.getArticles().subscribe((response: ArticlesResponse) => {
      this.articles = response.articles;
      this.paging = response.paging;
    });
  }
}
