import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ims07Component } from './ims07.component';

describe('Ims07Component', () => {
  let component: Ims07Component;
  let fixture: ComponentFixture<Ims07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ims07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ims07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
