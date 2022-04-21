import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Genre } from "../models/genre.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

const { listenNotesAPI: { baseURL } } = environment;

interface GenreResponse {
  genres: Genre[];
}

@Injectable({
  providedIn: "root",
})
export class GenreService {

  private _genres: Genre[] = [];
  private _error: string = "";
  private _loading: boolean = true;

  get genres(): Genre[] {
    return this._genres;
  }

  get error(): string {
    return this._error;
  }

  get loading(): boolean {
    return this._loading;
  }

  constructor(private http: HttpClient) {
  }

  findAll(): void {
    this.http.get<GenreResponse>(`${baseURL}/` + "genres")
      .pipe(
        map(response => response.genres),
      ).subscribe({
      next: (genres) => {
        this._genres = genres;
      },
      error: (error: HttpErrorResponse) => {
        this._error = error.message;
      },
      complete: () => {
        this._loading = false;
      },
    });
  }
}
