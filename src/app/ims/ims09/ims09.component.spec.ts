import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ims09Component } from './ims09.component';

describe('Ims09Component', () => {
  let component: Ims09Component;
  let fixture: ComponentFixture<Ims09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ims09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ims09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
