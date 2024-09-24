import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementDocumentsComponent } from './management-documents.component';

describe('ManagementDocumentsComponent', () => {
  let component: ManagementDocumentsComponent;
  let fixture: ComponentFixture<ManagementDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementDocumentsComponent]
    });
    fixture = TestBed.createComponent(ManagementDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
