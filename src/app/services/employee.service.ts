import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeUrl = 'api/employees'; // Adjust the URL to match your in-memory API

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl);
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeeUrl}/${id}`;
    return this.http.get<Employee>(url);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeeUrl, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.employeeUrl}/${employee.id}`;
    return this.http.put<Employee>(url, employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.employeeUrl}/${id}`;
    return this.http.delete<Employee>(url);
  }
}
