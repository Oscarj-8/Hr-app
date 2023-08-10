import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate';
import { CandidateService } from 'src/app/services/candidate.service';
import { Subscription } from 'rxjs';
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

  updateCandidate(updatedCandidate: Candidate): void {
    console.log('Updated candidate object:', updatedCandidate);

    if (updatedCandidate) {
      const subscription: Subscription = this.candidateService
        .updateCandidate(updatedCandidate)
        .subscribe(() => {
          this.getCandidates();
          this.clearSelection();
        });
    } else {
      console.warn('No candidate selected for update');
    }
  }

  deleteCandidate(id: number): void {
    this.candidateService.deleteCandidate(id).subscribe(() => {
      this.candidates = this.candidates.filter((c) => c.id !== id);
      this.clearSelection();
    });
  }

  addCandidate(candidate: Candidate) {
    this.candidateService
      .addCandidate(candidate)
      .subscribe((candidate) => this.candidates.push(candidate));

    this.showCandidateForm = false;
  }

  cancelCandidateForm(): void {
    this.showCandidateForm = false;
  }

  openCandidateForm() {
    this.showCandidateForm = !this.showCandidateForm;
  }

  clearSelection(): void {
    this.selectedCandidate = null;
  }
}
