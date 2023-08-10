import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DepartmentComponent } from './components/department/department.component';
import { SalaryComponent } from './components/salary/salary.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { CommonModule } from '@angular/common';
import { AddEmployeeButtonComponent } from './components/add-employee-button/add-employee-button.component';

import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { AddCandidateButtonComponent } from './components/add-candidate-button/add-candidate-button.component';
import { CandidateFormComponent } from './components/candidate-form/candidate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    EmployeeComponent,
    DepartmentComponent,
    SalaryComponent,
    EmployeeFormComponent,
    AddEmployeeButtonComponent,
    DashboardComponent,
    AddCandidateButtonComponent,
    CandidateFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
