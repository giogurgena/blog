import { Component, Input, OnInit } from '@angular/core';
import { BlogCategory } from 'src/app/models/blogCategories';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss'],
})
export class AdminCategoriesComponent implements OnInit {
  adminCategories: BlogCategory[];
  faEdit = faEdit;
  faTrash = faTrash;
  isLoading = false;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadBlogCategories();
  }

  loadBlogCategories() {
    this.isLoading = true;
    this.blogService
      .getBlogCategories()
      .subscribe((response: BlogCategory[]) => {
        this.adminCategories = response;
        this.isLoading = false;
      });
  }

  deleteBlogCategory(id) {
    this.blogService.deleteBlogCategory(id).subscribe((result)=> {
      this.loadBlogCategories();
    })
  }
}
