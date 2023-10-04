import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-feature-article",
  templateUrl: "./feature-article.component.html",
  styleUrls: ["../latest-news.component.scss"],
})
export class FeatureArticleComponent implements OnInit {
  @Input("date") date: string;
  @Input("subTitle") subTitle: string;
  @Input("content") content: string;
  constructor() {}

  ngOnInit(): void {}
}
