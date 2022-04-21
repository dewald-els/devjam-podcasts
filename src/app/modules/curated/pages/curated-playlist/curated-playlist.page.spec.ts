import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratedPlaylistPage } from './curated-playlist.page';

describe('CuratedPlaylistPage', () => {
  let component: CuratedPlaylistPage;
  let fixture: ComponentFixture<CuratedPlaylistPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuratedPlaylistPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratedPlaylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
