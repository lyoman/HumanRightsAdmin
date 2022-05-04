import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ims09ActionPlansComponent } from './ims09-action-plans.component';

describe('Ims09ActionPlansComponent', () => {
  let component: Ims09ActionPlansComponent;
  let fixture: ComponentFixture<Ims09ActionPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ims09ActionPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ims09ActionPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
