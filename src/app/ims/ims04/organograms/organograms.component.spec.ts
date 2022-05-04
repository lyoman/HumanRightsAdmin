import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganogramsComponent } from './organograms.component';

describe('OrganogramsComponent', () => {
  let component: OrganogramsComponent;
  let fixture: ComponentFixture<OrganogramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganogramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
