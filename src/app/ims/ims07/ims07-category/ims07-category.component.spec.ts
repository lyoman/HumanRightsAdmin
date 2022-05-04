import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ims07CategoryComponent } from './ims07-category.component';

describe('Ims07CategoryComponent', () => {
  let component: Ims07CategoryComponent;
  let fixture: ComponentFixture<Ims07CategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ims07CategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ims07CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
