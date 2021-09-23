import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogCategory } from 'src/app/models/blogCategories';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.scss']
})
export class CategoriesAddComponent implements OnInit {
  blogCategories: BlogCategory[];
  id;

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
      this.blogService.getBlogCategoryById(this.id).subscribe((response)=> {
        const blogCategory = response
        this.form.patchValue(blogCategory)      
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


  onSave() {
    const data = this.form.getRawValue();
    if(this.id) {
      this.blogService.putBlogCategory(this.id, data).subscribe(()=> {
        this.handlePostUpload(this.id);
      })
    } else {
      this.blogService.postBlogCategory(data).subscribe((result) => {
        this.handlePostUpload(result);
      });
    }
  }
  
  handlePostUpload(result: any) {
    this.router.navigate(['/admin/categories']);
  }

  loadBlogCategories() {
    this.blogService
      .getBlogCategories()
      .subscribe((response: BlogCategory[]) => {
        this.blogCategories = response;
      });
  }

}
