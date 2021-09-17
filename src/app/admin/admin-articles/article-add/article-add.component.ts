import { Language } from './../../../models/articles/language';
import { Article } from './../../../models/articles/articles';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import { BlogCategory } from 'src/app/models/blogCategories';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss'],
})
export class ArticleAddComponent implements OnInit {
  blogCategories: BlogCategory[];
  articles;
  data;

  form = this.fb.group({
    titles: this.fb.array([]),
  });

  constructor(
    private route: Router,
    private blogService: BlogService,
    private fb: FormBuilder
  ) {
    this.form = new FormGroup({
      categoryId: new FormControl(null, [Validators.required]),

      languages: new FormArray([
        new FormGroup({
          culture: new FormControl({ value: 'en-US', disabled: true }, [
            Validators.required,
          ]),
          caption: new FormControl(null, [Validators.required]),
          description: new FormControl(null, [Validators.required]),
        }),
        new FormGroup({
          culture: new FormControl({ value: 'ar-AE', disabled: true }, [
            Validators.required,
          ]),
          caption: new FormControl(null, [Validators.required]),
          description: new FormControl(null, [Validators.required]),
        }),
      ]),
    });
  }

  get languages() {
    return this.form.controls['languages'] as FormArray;
  }

  get languageFormGroups() {
    return this.languages.controls as Array<FormGroup>;
  }

  ngOnInit(): void {
    this.loadBlogCategories();
  }

  displayLanguage(formGroup: FormGroup) {
    const culture = formGroup.controls.culture.value;
    switch (culture) {
      case 'ar-AE':
        return 'Arabic';
      default:
        return 'English';
    }
  }

  onSave() {
    this.data = this.form.getRawValue();
    this.blogService.postArticles(this.data).subscribe((result) => {
      console.log(result);
    });
  }

  loadBlogCategories() {
    this.blogService
      .getBlogCategories()
      .subscribe((response: BlogCategory[]) => {
        this.blogCategories = response;
      });
  }
}
