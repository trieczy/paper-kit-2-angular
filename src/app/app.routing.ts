import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ArticleComponent } from "./pages/article/article.component";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "", component: DashboardComponent },
  { path: "article", component: ArticleComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
