import { TestBed } from '@angular/core/testing';

import { CuratedPodcastsService } from './curated-podcasts.service';

describe('CuratedPodcastsService', () => {
  let service: CuratedPodcastsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuratedPodcastsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
