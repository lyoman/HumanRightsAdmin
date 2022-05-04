import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ims04Component } from './ims04.component';

describe('Ims04Component', () => {
  let component: Ims04Component;
  let fixture: ComponentFixture<Ims04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ims04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ims04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
