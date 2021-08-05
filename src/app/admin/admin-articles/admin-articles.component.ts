import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Article } from 'src/app/models/articles/articles';
import { Paging } from 'src/app/models/paging';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.scss'],
})
export class AdminArticlesComponent implements OnInit {
  @Input() articles: Article[];
  @Input() paging: Paging;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}
}
