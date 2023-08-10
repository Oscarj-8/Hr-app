import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  addCandidate(candidate: Candidate): Observable<Candidate> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<Candidate>(this.candidateUrl, candidate, httpOptions);
  }

  deleteCandidate(id: number): Observable<Candidate> {
    const url = `${this.candidateUrl}/${id}`;
    return this.http.delete<Candidate>(url);
  }

  updateCandidate(candidate: Candidate): Observable<Candidate> {
    const url = `${this.candidateUrl}/${candidate.id}`;
    return this.http.put<Candidate>(url, candidate);
  }
}
