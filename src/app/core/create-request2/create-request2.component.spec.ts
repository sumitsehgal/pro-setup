import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRequest2Component } from './create-request2.component';

describe('CreateRequest2Component', () => {
  let component: CreateRequest2Component;
  let fixture: ComponentFixture<CreateRequest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRequest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRequest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
