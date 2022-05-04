import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSoldComponent } from './view-sold.component';

describe('ViewSoldComponent', () => {
  let component: ViewSoldComponent;
  let fixture: ComponentFixture<ViewSoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
