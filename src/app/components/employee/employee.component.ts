// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Employee } from 'src/app/models/employee';
// import { EmployeeService } from '../../services/employee.service';

// @Component({
//   selector: 'app-employee',
//   templateUrl: './employee.component.html',
//   styleUrls: ['./employee.component.css'],
//   providers: [EmployeeService],
// })
// export class EmployeeComponent implements OnInit {
//   employees: Employee[] = [];

//   constructor(
//     private http: HttpClient,
//     private employeeService: EmployeeService
//   ) {}

//   ngOnInit(): void {
//     this.employeeService
//       .getEmployees()
//       .subscribe((employee) => (this.employees = employee));
//   }

//   deleteEmployee(employee: Employee) {
//     this.employeeService.deleteEmployee(employee).subscribe(() => {
//       this.employees = this.employees.filter((e) => e.id !== employee.id);
//     });
//   }

//   editEmployee(employee: Employee): void {
//     console.log('clicked');
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { Employee } from '../../models/employee';
// import { EmployeeService } from '../../services/employee.service';

// @Component({
//   selector: 'app-employee',
//   templateUrl: './employee.component.html',
//   styleUrls: ['./employee.component.css'], // Adjust the path to your CSS file
// })
// export class EmployeeComponent implements OnInit {
//   employees: Employee[] = [];
//   selectedEmployee: Employee | null = null;

//   constructor(private employeeService: EmployeeService) {}

//   ngOnInit(): void {
//     this.loadEmployees();
//   }

//   loadEmployees(): void {
//     this.employeeService.getEmployees().subscribe((employees) => {
//       this.employees = employees;
//     });
//   }

//   selectEmployee(employee: Employee): void {
//     this.selectedEmployee = { ...employee };
//   }

//   clearSelection(): void {
//     this.selectedEmployee = null;
//   }

//   saveEmployee(employee: Employee): void {
//     if (employee.id) {
//       this.employeeService.updateEmployee(employee).subscribe(() => {
//         this.loadEmployees();
//         this.clearSelection();
//       });
//     } else {
//       this.employeeService.addEmployee(employee).subscribe(() => {
//         this.loadEmployees();
//         this.clearSelection();
//       });
//     }
//   }

//   deleteEmployee(id: number): void {
//     this.employeeService.deleteEmployee(id).subscribe(() => {
//       this.loadEmployees();
//       this.clearSelection();
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'], // Adjust the path to your CSS file
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee: Employee | null = null;

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

  clearSelection(): void {
    this.selectedEmployee = null;
  }

  // saveEmployee(employee: Employee): void {
  //   if (employee.id) {
  //     this.employeeService
  //       .updateEmployee(employee)
  //       .subscribe((updatedEmployee) => {
  //         const index = this.employees.findIndex(
  //           (e) => e.id === updatedEmployee.id
  //         );
  //         if (index !== -1) {
  //           this.employees[index] = updatedEmployee;
  //         }
  //         this.clearSelection();
  //       });
  //   } else {
  //     this.employeeService.addEmployee(employee).subscribe((newEmployee) => {
  //       this.employees.push(newEmployee);
  //       this.clearSelection();
  //     });
  //   }
  // }

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

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter((e) => e.id !== id);
      this.clearSelection();
    });
  }
}
