import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { TrendingSearches } from "../models/trending.model";

const { listenNotesAPI: { baseURL } } = environment;

@Injectable({
  providedIn: "root",
})
export class TrendingPodcastsService {

  private _trending_searches?: string[];

  get trending_searches(): string[] | undefined {
    return this._trending_searches;
  }

  constructor(private http: HttpClient) {
  }

  public findTrendingSearches(): void {
    this.http.get<TrendingSearches>(`${baseURL}/trending/`)
      .subscribe({
        next: (trending_searches) => {
          console.log(trending_searches?.terms);
          this._trending_searches = trending_searches?.terms;
        },
      });
  }
}
