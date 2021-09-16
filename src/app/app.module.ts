import { AuthenticationService } from './services/authenticatio.service';
import { AuthGuard } from './auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogCategoriesComponent } from './blog/blog-categories/blog-categories.component';
import { BlogArticlesComponent } from './blog/blog-articles/blog-articles.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AccessDeniedComponent } from './errors/access-denied/access-denied.component';
import { AdminArticlesComponent } from './admin/admin-articles/admin-articles.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminSideMenuComponent } from './admin/admin-side-menu/admin-side-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArticleAddComponent } from './admin/admin-articles/article-add/article-add.component';
import { CategoriesAddComponent } from './admin/admin-categories/categories-add/categories-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogCategoriesComponent,
    BlogArticlesComponent,
    AdminPanelComponent,
    HomeComponent,
    BlogComponent,
    NotFoundComponent,
    AccessDeniedComponent,
    AdminArticlesComponent,
    AdminCategoriesComponent,
    AdminSideMenuComponent,
    ArticleAddComponent,
    CategoriesAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [AuthGuard, AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
