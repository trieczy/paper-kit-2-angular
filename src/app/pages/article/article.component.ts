import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
})
export class ArticleComponent implements OnInit {
  imageList: Array<string>;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.imageList = params.filePaths;
    });
  }

  ngOnInit(): void {}
}
