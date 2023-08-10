import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Candidate } from 'src/app/models/candidate';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css'],
})
export class CandidateFormComponent implements OnInit {
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  newCandidate: Candidate = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    department: '',
    experience: 0,
    interviewStatus: '',
  };

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {}

  addCandidate() {
    this.candidateService.addCandidate(this.newCandidate);
    this.newCandidate = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      department: '',
      experience: 0,
      interviewStatus: '',
    };
  }

  cancelForm(): void {
    this.cancel.emit();
  }
}
