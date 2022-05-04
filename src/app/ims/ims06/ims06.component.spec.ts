import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ims06Component } from './ims06.component';

describe('Ims06Component', () => {
  let component: Ims06Component;
  let fixture: ComponentFixture<Ims06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ims06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ims06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
