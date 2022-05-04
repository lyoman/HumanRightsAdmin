import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsRegisterComponent } from './complaints-register.component';

describe('ComplaintsRegisterComponent', () => {
  let component: ComplaintsRegisterComponent;
  let fixture: ComponentFixture<ComplaintsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
