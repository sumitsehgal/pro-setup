import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlManageComponent } from './control-manage.component';

describe('ControlManageComponent', () => {
  let component: ControlManageComponent;
  let fixture: ComponentFixture<ControlManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
