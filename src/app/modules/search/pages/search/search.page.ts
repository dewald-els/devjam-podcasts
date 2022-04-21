import { Component, OnInit } from "@angular/core";
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap, tap } from "rxjs";
import { SearchService } from "../../services/search.service";
import { SearchResult } from "../../models/search.model";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"],
})
export class SearchPage implements OnInit {

  public podcasts$!: Observable<SearchResult[]>;
  private searchTerm$ = new Subject<string>();
  public searchResultCount: number = 0;

  get loading(): boolean {
    return this.searchService.loading;
  }


  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.podcasts$ = this.searchTerm$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchService.search(term)),
      tap((results: SearchResult[]) => {
        this.searchResultCount = results.length;
      }),
    );
  }

  public search(term: string): void {
    if (term.length > 2) {
      this.searchTerm$.next(term);
    }
  }

}
