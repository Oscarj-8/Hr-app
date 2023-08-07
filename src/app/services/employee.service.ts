import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeUrl = 'api/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.employeeUrl);
  }
}
