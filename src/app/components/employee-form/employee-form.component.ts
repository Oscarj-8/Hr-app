// employee-form.component.ts
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  @Input() showEmployeeForm: boolean = false;
  @Output() cancel: EventEmitter<Employee> = new EventEmitter();
  @Output() onAddEmployee: EventEmitter<Employee> = new EventEmitter();
  id: number = 0;
  name: string = '';
  email: string = '';
  phone: number = +251;
  department: string = '';
  salary: number = 0;

  // newEmployee: Employee = {
  //   id: 0,
  //   name: '',
  //   email: '',
  //   phone: '',
  //   department: '',
  //   salary: 0,
  // };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  addEmployee() {
    // this.employeeService.addEmployee(this.newEmployee);
    // this.newEmployee = {
    //   id: 0,
    //   name: '',
    //   email: '',
    //   phone: '',
    //   department: '',
    //   salary: 0,
    // };
    if (!this.name) {
      alert('Please enter a name');
      return;
    }

    const newEmployee = {
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      department: this.department,
      salary: this.salary,
    };

    this.onAddEmployee.emit(newEmployee);

    this.id = 0;
    this.name = '';
    this.email = '';
    this.phone = +251;
    this.department = '';
    this.salary = 0;
  }

  cancelForm(): void {
    this.cancel.emit();
  }
}
