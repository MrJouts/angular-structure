import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxAllMaterialComponent } from './checkbox-all-material.component';

describe('CheckboxAllMaterialComponent', () => {
  let component: CheckboxAllMaterialComponent;
  let fixture: ComponentFixture<CheckboxAllMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxAllMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxAllMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
