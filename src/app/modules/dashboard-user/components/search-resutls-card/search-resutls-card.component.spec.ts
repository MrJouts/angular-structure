import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResutlsCardComponent } from './search-resutls-card.component';

describe('SearchResutlsCardComponent', () => {
  let component: SearchResutlsCardComponent;
  let fixture: ComponentFixture<SearchResutlsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResutlsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResutlsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
