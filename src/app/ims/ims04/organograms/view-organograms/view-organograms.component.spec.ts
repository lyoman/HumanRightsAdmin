import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrganogramsComponent } from './view-organograms.component';

describe('ViewOrganogramsComponent', () => {
  let component: ViewOrganogramsComponent;
  let fixture: ComponentFixture<ViewOrganogramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrganogramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrganogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
