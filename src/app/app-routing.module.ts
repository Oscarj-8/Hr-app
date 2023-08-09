import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { CandidateComponent } from './components/candidate/candidate.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeComponent },
  { path: 'candidates', component: CandidateComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
