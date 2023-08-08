import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../models/candidate';
@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  private candidateUrl = 'api/candidates';

  constructor(private http: HttpClient) {}

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.candidateUrl);
  }
}
