import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSoldStockComponent } from './new-sold-stock.component';

describe('NewSoldStockComponent', () => {
  let component: NewSoldStockComponent;
  let fixture: ComponentFixture<NewSoldStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSoldStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSoldStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
