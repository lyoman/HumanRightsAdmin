import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ims08Component } from './ims08.component';

describe('Ims08Component', () => {
  let component: Ims08Component;
  let fixture: ComponentFixture<Ims08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ims08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ims08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
