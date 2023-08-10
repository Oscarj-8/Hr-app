import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

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

  // updateEmployee(updatedEmployee: Employee): void {
  //   console.log('Updated employee object:', updatedEmployee);
  //   this.employeeService
  //     .updateEmployee(updatedEmployee)
  //     .subscribe((updatedEmployee) => this.employees.push(updatedEmployee));
  // }

  updateEmployee(updatedEmployee: Employee): void {
    console.log('Updated employee object:', updatedEmployee);

    if (updatedEmployee) {
      const subscription: Subscription = this.employeeService
        .updateEmployee(updatedEmployee)
        .pipe(
          tap((updated) => {
            console.log('Updated employee response:', updated);

            if (updated) {
              const index = this.employees.findIndex(
                (e) => e.id === updated.id
              );
              if (index !== -1) {
                this.employees[index] = updated;
              }
            }

            this.clearSelection();
          })
        )
        .subscribe({
          next: (result) => {
            console.log('Update completed:', result);
            // Handle the result here
          },
          error: (error) => {
            console.error('Error updating employee:', error);
            // Handle error
          },
          complete: () => {
            console.log('Update completed.');
          },
        });
    } else {
      console.warn('No employee selected for update');
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
