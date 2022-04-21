import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { map } from "rxjs";
import { CuratedPlaylist } from "../models/curated.model";

const { listenNotesAPI: { baseURL } } = environment;

interface CuratedResponse {
  curated_lists: CuratedPlaylist[];
  has_next: boolean;
  has_previous: boolean;
  page_number: number;
  previous_page_number: number;
  total: number;
}

@Injectable({
  providedIn: "root",
})
export class CuratedService {

  private _curated: CuratedPlaylist[] = [];

  get curated(): CuratedPlaylist[] {
    return this._curated;
  }

  constructor(private http: HttpClient) {
  }

  findAll(): void {
    this.http.get<CuratedResponse>(`${baseURL}/curated_podcasts`)
      .pipe(
        map(response => response.curated_lists),
      )
      .subscribe({
        next: (playlists: CuratedPlaylist[]) => {
          console.log(playlists);
          this._curated = playlists;
        },
      });
  }
}
