import { ArticlesResponse } from './../models/articles/articlesResponse';
import { BlogCategory } from './../models/blogCategories';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Article } from '../models/articles/article';

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

  postBlogCategory(data){
    return this.http.post(this.baseUrl + 'BlogCategories', data)
  }

  getBlogCategoryById(id): Observable<BlogCategory[]> {
    return this.http.get<BlogCategory[]>(
      this.baseUrl + 'BlogCategories/' + id
    )
  }

  putBlogCategory(id, data) {
    return this.http.put(this.baseUrl + 'BlogCategories/' + id, data);
  }

  deleteBlogCategory(id){
    return this.http.delete(this.baseUrl + 'BlogCategories/' + id);
  }

  getArticles(): Observable<ArticlesResponse> {
    return this.http.get<ArticlesResponse>(this.baseUrl + 'Articles');
  }

  getArticleById(id): Observable<Article> {
    return this.http.get<Article>(this.baseUrl + 'Articles/' + id);
  }

  postArticle(data) {
    return this.http.post(this.baseUrl + 'Articles', data);
  }

  putArticle(id, data) {
    return this.http.put(this.baseUrl + 'Articles/' + id, data);
  }

  deleteArticle(id){
    return this.http.delete(this.baseUrl + 'Articles/' + id);
  }

  uploadPoster(id, file) {
    const formData: FormData = new FormData();
      formData.append('file', file);
    return this.http.patch(this.baseUrl + 'Articles/' + id + '/UploadPoster', formData);
  }
}
