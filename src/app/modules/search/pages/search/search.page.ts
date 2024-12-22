import { Component, OnInit } from "@angular/core";
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap, tap } from "rxjs";
import { SearchService } from "../../services/search.service";
import { SearchResult } from "../../models/search.model";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-search",
	templateUrl: "./search.page.html",
	styleUrls: ["./search.page.scss"],
})
export class SearchPage implements OnInit {
	public podcasts$!: Observable<SearchResult[]>;
	private searchTerm$ = new Subject<string>();
	public searchResultCount: number = 0;
	public searchQuery: string = "";

	get loading(): boolean {
		return this.searchService.loading;
	}

	constructor(private searchService: SearchService, private readonly router: ActivatedRoute) {
		this.router.queryParams.subscribe((param) => {
			if (Object.prototype.hasOwnProperty.call(param, "query")) {
				const query = param["query"];
				this.searchQuery = query;
			}
		});
	}

	ngOnInit(): void {
		this.podcasts$ = this.searchTerm$.pipe(
			debounceTime(500),
			distinctUntilChanged(),
			switchMap((term: string) => this.searchService.search(term)),
			tap((results: SearchResult[]) => {
				this.searchResultCount = results.length;
			})
		);

		setTimeout(() => {
			// Trigger search if query is in url.
			if (this.searchQuery) {
				this.search(this.searchQuery);
			}
		}, 100);
	}

	public search(term: string): void {
		if (term.length > 2) {
			this.searchTerm$.next(term);
		}
	}
}
