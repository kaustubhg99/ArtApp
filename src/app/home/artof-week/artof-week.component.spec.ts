import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtofWeekComponent } from './artof-week.component';

describe('ArtofWeekComponent', () => {
  let component: ArtofWeekComponent;
  let fixture: ComponentFixture<ArtofWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtofWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtofWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
