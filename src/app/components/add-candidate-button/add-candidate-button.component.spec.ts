import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCandidateButtonComponent } from './add-candidate-button.component';

describe('AddCandidateButtonComponent', () => {
  let component: AddCandidateButtonComponent;
  let fixture: ComponentFixture<AddCandidateButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCandidateButtonComponent]
    });
    fixture = TestBed.createComponent(AddCandidateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
