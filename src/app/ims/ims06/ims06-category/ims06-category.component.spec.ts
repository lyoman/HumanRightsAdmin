import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ims06CategoryComponent } from './ims06-category.component';

describe('Ims06CategoryComponent', () => {
  let component: Ims06CategoryComponent;
  let fixture: ComponentFixture<Ims06CategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ims06CategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ims06CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
