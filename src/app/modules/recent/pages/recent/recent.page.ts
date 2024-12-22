import { Component, OnInit } from "@angular/core";
import { TrendingPodcastsService } from "../../services/trending-podcasts.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-recent",
	templateUrl: "./recent.page.html",
	styleUrls: ["./recent.page.scss"],
})
export class RecentPage implements OnInit {
	constructor(private readonly trendingService: TrendingPodcastsService, private router: Router) {}

	get trending_searches() {
		return this.trendingService.trending_searches;
	}

	ngOnInit(): void {
		this.trendingService.findTrendingSearches();
	}

	searchByRecentTerm(term: string) {
		this.router.navigate(["/search"], {
			queryParams: {
				query: term,
			},
		});
	}
}
