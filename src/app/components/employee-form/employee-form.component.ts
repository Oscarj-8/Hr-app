// employee-form.component.ts
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  @Input() showEmployeeForm: boolean = false;
  @Output() cancel: EventEmitter<Employee> = new EventEmitter();

  newEmployee: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    department: '',
    salary: 0,
  };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  addEmployee() {
    this.employeeService.addEmployee(this.newEmployee);
    this.newEmployee = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      department: '',
      salary: 0,
    };
  }

  cancelForm(): void {
    this.cancel.emit();
  }
}
