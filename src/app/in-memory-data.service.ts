import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Candidate } from './models/candidate';
import { Employee } from './models/employee';
import { Department } from './models/department';
import { Salary } from './models/salary';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const candidates: Candidate[] = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '096634122',
        experience: 5,
        interviewStatus: 'pending',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '090637600',
        experience: 3,
        interviewStatus: 'pending',
      },
      {
        id: 3,
        name: 'Smith Jane ',
        email: 'smith.jane@example.com',
        phone: '0932362289',
        experience: 4,
        interviewStatus: 'pending',
      },
      // Add more candidate objects as needed
    ];

    const employees: Employee[] = [
      {
        id: 1,
        name: 'John Smith',
        email: 'john.smith@example.com',
        phone: '0912346778',
        department: 'IT',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        phone: '0963346523',
        department: 'HR',
      },
      {
        id: 3,
        name: 'James Arnold',
        email: 'arnold.jamese@example.com',
        phone: '0932456790',
        department: 'HR',
      },
      // Add more employee objects as needed
    ];

    const department: Department[] = [
      {
        id: 1,
        name: 'HR',
      },
      {
        id: 2,
        name: 'IT',
      },
      {
        id: 3,
        name: 'Graphics Design',
      },
    ];

    const Salary: Salary[] = [
      {
        id: 1,
        employee_id: 1,
        amount: 11000,
      },
      {
        id: 1,
        employee_id: 2,
        amount: 13000,
      },
      {
        id: 1,
        employee_id: 3,
        amount: 14000,
      },
    ];

    return { candidates, employees, department };
  }
}
