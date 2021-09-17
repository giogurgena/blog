import { ArticlesResponse } from './../models/articles/articlesResponse';
import { BlogCategory } from './../models/blogCategories';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBlogCategories(): Observable<BlogCategory[]> {
    return this.http.get<BlogCategory[]>(
      this.baseUrl + 'BlogCategories/Collection'
    );
  }

  getArticles(): Observable<ArticlesResponse> {
    return this.http.get<ArticlesResponse>(this.baseUrl + 'Articles');
  }

  postArticles(data) {
    return this.http.post(this.baseUrl + 'Articles', data);
  }
}
