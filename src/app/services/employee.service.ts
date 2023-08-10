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

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeeUrl, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.employeeUrl}/${employee.id}`;
    return this.http.put<Employee>(url, employee);
  }

  deleteEmployee(employee: Employee): Observable<any> {
    const url = `${this.employeeUrl}/${employee.id}`;
    return this.http.delete(url);
  }
}
