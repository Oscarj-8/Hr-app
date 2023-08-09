// employee-form.component.ts
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  newEmployee: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    department: '',
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
    };
  }

  cancelAdd() {
    this.newEmployee = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      department: '',
    };
  }
}
