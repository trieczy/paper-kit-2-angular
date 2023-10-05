import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-announcement",
  templateUrl: "./announcement.component.html",
  styleUrls: ["../latest-news.component.scss"],
})
export class AnnouncementComponent implements OnInit {
  @Input("date") date: string;
  @Input("subTitle") subTitle: string;
  @Input("content") content: string;
  @Input("paths") paths: Array<string>;
  constructor() {}

  ngOnInit(): void {}
}
