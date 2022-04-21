import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-genre-detail",
  templateUrl: "./genre-detail.page.html",
  styleUrls: ["./genre-detail.page.scss"],
})
export class GenreDetailPage implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const genreId = Number(this.route.snapshot.paramMap.get("id"));
  }

}
