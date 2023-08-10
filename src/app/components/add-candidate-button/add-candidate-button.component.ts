import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-candidate-button',
  templateUrl: './add-candidate-button.component.html',
  styleUrls: ['./add-candidate-button.component.css'],
})
export class AddCandidateButtonComponent {
  @Output() addCandidateClick: EventEmitter<void> = new EventEmitter<void>();

  addCandidate(): void {
    this.addCandidateClick.emit();
  }
}
