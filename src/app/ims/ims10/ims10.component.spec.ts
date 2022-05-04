import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ims10Component } from './ims10.component';

describe('Ims10Component', () => {
  let component: Ims10Component;
  let fixture: ComponentFixture<Ims10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ims10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ims10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
