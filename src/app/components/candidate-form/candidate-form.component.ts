import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css'],
})
export class CandidateFormComponent implements OnInit {
  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {}
}
