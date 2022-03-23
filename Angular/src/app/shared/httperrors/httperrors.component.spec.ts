import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPErrorsComponent } from './httperrors.component';

describe('HTTPErrorsComponent', () => {
  let component: HTTPErrorsComponent;
  let fixture: ComponentFixture<HTTPErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTTPErrorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HTTPErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
