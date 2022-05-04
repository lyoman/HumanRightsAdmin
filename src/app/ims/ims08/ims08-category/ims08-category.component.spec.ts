import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ims08CategoryComponent } from './ims08-category.component';

describe('Ims08CategoryComponent', () => {
  let component: Ims08CategoryComponent;
  let fixture: ComponentFixture<Ims08CategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ims08CategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ims08CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
