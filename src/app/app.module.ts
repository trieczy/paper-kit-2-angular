import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ArticleComponent } from "./pages/article/article.component";

import { NavComponent } from "./shared/nav/nav.component";

import { AboutComponent } from "./components/about/about.component";
import { LatestNewsComponent } from "./components/latest-news/latest-news.component";
import { AnnouncementComponent } from "./components/latest-news/announcement/announcement.component";
import { FeatureArticleComponent } from "./components/latest-news/feature-article/feature-article.component";
import { MediaComponent } from "./components/latest-news/media/media.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    AboutComponent,
    LatestNewsComponent,
    AnnouncementComponent,
    FeatureArticleComponent,
    MediaComponent,
    ContactUsComponent,
    ArticleComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ContactUsComponent],
})
export class AppModule {}
