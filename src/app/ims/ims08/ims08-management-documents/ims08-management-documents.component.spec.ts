import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ims08ManagementDocumentsComponent } from './ims08-management-documents.component';

describe('Ims08ManagementDocumentsComponent', () => {
  let component: Ims08ManagementDocumentsComponent;
  let fixture: ComponentFixture<Ims08ManagementDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ims08ManagementDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ims08ManagementDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
