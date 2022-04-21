import { Component, Input, OnInit } from "@angular/core";
import { Genre } from "../../models/genre.model";

@Component({
  selector: "app-genre-list",
  templateUrl: "./genre-list.component.html",
  styleUrls: ["./genre-list.component.scss"],
})
export class GenreListComponent implements OnInit {

  @Input()
  public genres: Genre[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
