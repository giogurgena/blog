import { Component, Input, OnInit } from '@angular/core';
import { BlogCategory } from 'src/app/models/blogCategories';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss'],
})
export class AdminCategoriesComponent implements OnInit {
  @Input() adminCategories: BlogCategory[];
  faEdit = faEdit;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}
}
