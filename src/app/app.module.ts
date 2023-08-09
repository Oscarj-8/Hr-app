import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DepartmentComponent } from './components/department/department.component';
import { SalaryComponent } from './components/salary/salary.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { CommonModule } from '@angular/common';
import { AddEmployeeButtonComponent } from './components/add-employee-button/add-employee-button.component';
import { DasgboardComponent } from './shared/dasgboard/dasgboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    EmployeeComponent,
    DepartmentComponent,
    SalaryComponent,
    EmployeeFormComponent,
    AddEmployeeButtonComponent,
    DasgboardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
