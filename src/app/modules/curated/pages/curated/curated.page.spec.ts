import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratedPage } from './curated.page';

describe('CuratedPage', () => {
  let component: CuratedPage;
  let fixture: ComponentFixture<CuratedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuratedPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
