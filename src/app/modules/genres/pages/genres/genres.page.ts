import { Component, OnInit } from "@angular/core";
import { GenreService } from "../../services/genre.service";
import { Genre } from "../../models/genre.model";

@Component({
  selector: "app-genres",
  templateUrl: "./genres.page.html",
  styleUrls: ["./genres.page.scss"],
})
export class GenresPage implements OnInit {

  get genres(): Genre[] {
    return this.genreService.genres;
  }

  get loading(): boolean {
    return this.genreService.loading;
  }

  get error(): string {
    return this.genreService.error;
  }

  constructor(private genreService: GenreService) {
  }

  ngOnInit(): void {
    if (this.genreService.genres.length === 0) {
      this.genreService.findAll();
    }
  }

}
