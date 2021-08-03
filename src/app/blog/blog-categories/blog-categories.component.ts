import { Component, OnInit } from '@angular/core';
import { BlogCategory } from 'src/app/models/blogCategories';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss'],
})
export class BlogCategoriesComponent implements OnInit {
  blogCategories: BlogCategory[];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadBlogCategories();
  }

  loadBlogCategories() {
    this.blogService
      .getBlogCategories()
      .subscribe((response: BlogCategory[]) => {
        this.blogCategories = response;
      });
  }
}
