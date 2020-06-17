import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsManageComponent } from './controls-manage.component';

describe('ControlsManageComponent', () => {
  let component: ControlsManageComponent;
  let fixture: ComponentFixture<ControlsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
