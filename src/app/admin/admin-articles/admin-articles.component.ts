import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Articles } from 'src/app/models/articles/articles';
import { ArticlesResponse } from 'src/app/models/articles/articlesResponse';
import { Paging } from 'src/app/models/paging';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.scss'],
})
export class AdminArticlesComponent implements OnInit {
  articles: Articles[];
  paging: Paging;
  faEdit = faEdit;
  faTrash = faTrash;

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

  deleteArticle(id) {
    this.blogService.deleteArticle(id).subscribe((result)=> {
      this.loadArticles();
    })
  }
}
