import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DepartmentComponent } from './components/department/department.component';
import { SalaryComponent } from './components/salary/salary.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    EmployeeComponent,
    DepartmentComponent,
    SalaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
