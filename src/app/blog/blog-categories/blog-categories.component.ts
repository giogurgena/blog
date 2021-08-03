import { Component, Input } from '@angular/core';
import { BlogCategory } from 'src/app/models/blogCategories';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss'],
})
export class BlogCategoriesComponent {
  @Input() blogCategories: BlogCategory[];

  constructor() {}
}
