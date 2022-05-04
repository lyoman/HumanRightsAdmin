import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ims05Component } from './ims05.component';

describe('Ims05Component', () => {
  let component: Ims05Component;
  let fixture: ComponentFixture<Ims05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ims05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ims05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
