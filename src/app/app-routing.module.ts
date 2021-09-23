import { ArticleAddComponent } from './admin/admin-articles/article-add/article-add.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminArticlesComponent } from './admin/admin-articles/admin-articles.component';
import { AccessDeniedComponent } from './errors/access-denied/access-denied.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { CategoriesAddComponent } from './admin/admin-categories/categories-add/categories-add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      { path: '', component: AdminPanelComponent },
      {
        path: 'articles',
        children: [
          { path: '', component: AdminArticlesComponent },
          { path: 'add', component: ArticleAddComponent },
          { path: 'edit/:id', component: ArticleAddComponent },
        ],
      },
      { path: 'categories', 
        children: [
          { path: '', component: AdminCategoriesComponent },
          { path: 'add', component: CategoriesAddComponent },
          { path: 'edit/:id', component: CategoriesAddComponent },
        ],
      },
    ],
  },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
