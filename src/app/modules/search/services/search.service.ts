import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { finalize, map, Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { SearchResult, SearchResultResponse } from "../models/search.model";

const { listenNotesAPI: { baseURL } } = environment;

@Injectable({
  providedIn: "root",
})
export class SearchService {

  private _loading: boolean = false;

  get loading(): boolean {
    return this._loading;
  }

  constructor(private http: HttpClient) {
  }

  public search(term: string): Observable<SearchResult[]> {
    this._loading = true;
    return this.http.get<SearchResultResponse>(`${baseURL}/search?query=${term}`)
      .pipe(
        map(response => response.results),
        finalize(() => {
          this._loading = false;
        }),
      );
  }
}
