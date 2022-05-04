import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ims10CategoryComponent } from './ims10-category.component';

describe('Ims10CategoryComponent', () => {
  let component: Ims10CategoryComponent;
  let fixture: ComponentFixture<Ims10CategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ims10CategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ims10CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
