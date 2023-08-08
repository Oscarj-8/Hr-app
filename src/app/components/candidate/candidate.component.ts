import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from 'src/app/models/candidate';
import { CandidateService } from 'src/app/services/candidate.service';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
})
export class CandidateComponent implements OnInit {
  candidates: Candidate[] = [];

  constructor(
    private http: HttpClient,
    private candidateService: CandidateService
  ) {}

  ngOnInit(): void {
    this.getCandidates();
  }

  getCandidates(): void {
    this.candidateService
      .getCandidates()
      .subscribe((candidate) => (this.candidates = candidate));
  }
}
