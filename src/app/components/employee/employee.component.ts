import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee: Employee | null = null;
  showEmployeeForm = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }

  selectEmployee(employee: Employee): void {
    this.selectedEmployee = { ...employee };
  }

  saveEmployee(employee: Employee): void {
    if (employee.id) {
      this.employeeService.updateEmployee(employee).subscribe(
        (updatedEmployee) => {
          if (updatedEmployee) {
            const index = this.employees.findIndex(
              (e) => e.id === updatedEmployee.id
            );
            if (index !== -1) {
              this.employees[index] = updatedEmployee;
            }
          }
          this.clearSelection();
        },
        (error) => {
          console.error('Error updating employee:', error);
          this.clearSelection();
        }
      );
    } else {
      this.employeeService.addEmployee(employee).subscribe(
        (newEmployee) => {
          this.employees.push(newEmployee);
          this.clearSelection();
        },
        (error) => {
          console.error('Error adding employee:', error);
          this.clearSelection();
        }
      );
    }
  }

  deleteEmployee(employee: Employee) {
    console.log(employee);
    this.employeeService
      .deleteEmployee(employee)
      .subscribe(
        () =>
          (this.employees = this.employees.filter((e) => e.id !== employee.id))
      );
    this.clearSelection();
  }

  addEmployee(employee: Employee) {
    this.employeeService
      .addEmployee(employee)
      .subscribe((employee) => this.employees.push(employee));

    this.showEmployeeForm = !this.showEmployeeForm;
  }

  openEmployeeForm() {
    this.showEmployeeForm = !this.showEmployeeForm;
  }

  cancelEmployeeForm() {
    this.showEmployeeForm = !this.showEmployeeForm;
  }

  clearSelection(): void {
    this.selectedEmployee = null;
  }
}
