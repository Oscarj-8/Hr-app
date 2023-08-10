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
  @Output() onAddCandidate: EventEmitter<Candidate> = new EventEmitter();
  id: number = 0;
  name: string = '';
  email: string = '';
  phone: number = +251;
  department: string = '';
  experience: number = 0;
  interviewStatus: string = '';

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {}

  addCandidate() {
    // this.candidateService.addCandidate(this.newCandidate);
    // this.newCandidate = {
    //   id: 0,
    //   name: '',
    //   email: '',
    //   phone: '',
    //   department: '',
    //   experience: 0,
    //   interviewStatus: '',
    // };
    if (!this.name) {
      alert('Please enter a name');
    }

    const newCandidate = {
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      department: this.department,
      experience: this.experience,
      interviewStatus: this.interviewStatus,
    };

    this.onAddCandidate.emit(newCandidate);

    this.id = 0;
    this.name = '';
    this.email = '';
    this.phone = +251;
    this.department = '';
    this.experience = 0;
    this.interviewStatus = '';
  }

  cancelForm(): void {
    this.cancel.emit();
  }
}
