import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeButtonComponent } from './add-employee-button.component';

describe('AddEmployeeButtonComponent', () => {
  let component: AddEmployeeButtonComponent;
  let fixture: ComponentFixture<AddEmployeeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeeButtonComponent]
    });
    fixture = TestBed.createComponent(AddEmployeeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
