import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { CuratedPlaylist } from "../models/curated.model";

const { listenNotesAPI: { baseURL } } = environment;

@Injectable({
  providedIn: "root",
})
export class CuratedPodcastsService {

  private _podcasts?: CuratedPlaylist;

  get podcasts(): CuratedPlaylist | undefined {
    return this._podcasts;
  }

  constructor(private http: HttpClient) {
  }

  public findCuratedPodcastsById(curatedId: string): void {
    this.http.get<CuratedPlaylist>(`${baseURL}/curated_podcasts/${curatedId}`)
      .subscribe({
        next: (playlist) => {
          this._podcasts = playlist;
        },
      });
  }
}
