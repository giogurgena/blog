import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import { BlogCategory } from 'src/app/models/blogCategories';
import { Article } from 'src/app/models/articles/article';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss'],
})
export class ArticleAddComponent implements OnInit {
  blogCategories: BlogCategory[];
  articles;
  id;
  file;

  form = this.fb.group({
    titles: this.fb.array([]),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.blogService.getArticleById(this.id).subscribe((response: Article)=> {
        const article = response
        this.form.patchValue(article)      
      })
    }
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

  onFileChanged(event) {
    if (event.target.file === 0)
        return;

        this.file = event.target.files[0];
  }

  onSave() {
    const data = this.form.getRawValue();
    if(this.id) {
      this.blogService.putArticle(this.id, data).subscribe(()=> {
        this.handlePostUpload(this.id);
      })
    } else {
      this.blogService.postArticle(data).subscribe((result) => {
        this.handlePostUpload(result);
      });
    }
  }
  loadBlogCategories() {
    this.blogService
      .getBlogCategories()
      .subscribe((response: BlogCategory[]) => {
        this.blogCategories = response;
      });
  }



  private handlePostUpload(id) {
    if (this.file) {
      this.blogService.uploadPoster(id, this.file).subscribe(() => {
        this.router.navigate(['/admin/articles']);
      });
    } else {
      this.router.navigate(['/admin/articles']);
    }
  }

}
