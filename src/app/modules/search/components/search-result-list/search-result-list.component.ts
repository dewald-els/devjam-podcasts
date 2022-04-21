import { Component, Input, OnInit } from "@angular/core";
import { SearchResult } from "../../models/search.model";

@Component({
  selector: "app-search-result-list",
  templateUrl: "./search-result-list.component.html",
  styleUrls: ["./search-result-list.component.scss"],
})
export class SearchResultListComponent implements OnInit {

  @Input()
  public podcasts: SearchResult[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
