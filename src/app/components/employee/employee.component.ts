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
//   constructor(private http: HttpClient, private employeeService: EmployeeService) {}

//   ngOnInit(): void {
//    this.getEmployees();
// }
//  getEmployees(): void {
//     this.employeeService.getEmployees()
//       .subscribe(employees => this.employees = employees);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    private http: HttpClient,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService
      .getEmployees()
      .subscribe((employees) => (this.employees = employees));
  }
}
