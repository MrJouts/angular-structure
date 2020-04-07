import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResutlsComponent } from './search-resutls.component';

describe('SearchResutlsComponent', () => {
  let component: SearchResutlsComponent;
  let fixture: ComponentFixture<SearchResutlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResutlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResutlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
