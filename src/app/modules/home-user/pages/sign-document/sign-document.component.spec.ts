import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignDocumentComponent } from './sign-document.component';

describe('SignDocumentComponent', () => {
  let component: SignDocumentComponent;
  let fixture: ComponentFixture<SignDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignDocumentComponent]
    });
    fixture = TestBed.createComponent(SignDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
