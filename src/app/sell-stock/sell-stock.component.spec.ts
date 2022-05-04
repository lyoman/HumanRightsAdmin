import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellStockComponent } from './sell-stock.component';

describe('SellStockComponent', () => {
  let component: SellStockComponent;
  let fixture: ComponentFixture<SellStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
