import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusRequestCardComponent } from './status-request-card.component';

describe('StatusRequestCardComponent', () => {
  let component: StatusRequestCardComponent;
  let fixture: ComponentFixture<StatusRequestCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusRequestCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
