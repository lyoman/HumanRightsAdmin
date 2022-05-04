import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComplaintsRegisterComponent } from './view-complaints-register.component';

describe('ViewComplaintsRegisterComponent', () => {
  let component: ViewComplaintsRegisterComponent;
  let fixture: ComponentFixture<ViewComplaintsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComplaintsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComplaintsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
