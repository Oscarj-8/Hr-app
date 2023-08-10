import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate';
import { CandidateService } from 'src/app/services/candidate.service';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
})
export class CandidateComponent implements OnInit {
  candidates: Candidate[] = [];
  selectedCandidate: Candidate | null = null;
  showCandidateForm: boolean = false;

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.getCandidates();
  }

  getCandidates(): void {
    this.candidateService
      .getCandidates()
      .subscribe((candidate) => (this.candidates = candidate));
  }

  selectCandidate(candidate: Candidate): void {
    this.selectedCandidate = { ...candidate };
  }

  clearSelection(): void {
    this.selectedCandidate = null;
  }

  saveCandidate(employee: Candidate): void {
    if (employee.id) {
      this.candidateService.updateCandidate(employee).subscribe(
        (updatedCandidate) => {
          if (updatedCandidate) {
            const index = this.candidates.findIndex(
              (e) => e.id === updatedCandidate.id
            );
            if (index !== -1) {
              this.candidates[index] = updatedCandidate;
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
      this.candidateService.addCandidate(employee).subscribe(
        (newCandidate) => {
          this.candidates.push(newCandidate);
          this.clearSelection();
        },
        (error) => {
          console.error('Error adding employee:', error);
          this.clearSelection();
        }
      );
    }
  }

  deleteCandidate(id: number): void {
    this.candidateService.deleteCandidate(id).subscribe(() => {
      this.candidates = this.candidates.filter((c) => c.id !== id);
      this.clearSelection();
    });
  }

  cancelCandidateForm(): void {
    console.log('cliced');
    this.showCandidateForm = false;
  }

  openCandidateForm() {
    this.showCandidateForm = !this.showCandidateForm;
  }
}
