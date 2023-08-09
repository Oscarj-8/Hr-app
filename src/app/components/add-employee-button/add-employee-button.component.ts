import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-employee-button',
  templateUrl: './add-employee-button.component.html',
  styleUrls: ['./add-employee-button.component.css'],
})
export class AddEmployeeButtonComponent {
  @Output() addEmployeeClick: EventEmitter<void> = new EventEmitter<void>();

  addEmployee(): void {
    this.addEmployeeClick.emit();
  }
}
