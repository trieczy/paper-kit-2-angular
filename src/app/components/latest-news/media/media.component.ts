import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-media",
  templateUrl: "./media.component.html",
  styleUrls: ["../latest-news.component.scss"],
})
export class MediaComponent implements OnInit {
  @Input("date") date: string;
  @Input("subTitle") subTitle: string;
  @Input("content") content: string;
  constructor() {}

  ngOnInit(): void {}
}
