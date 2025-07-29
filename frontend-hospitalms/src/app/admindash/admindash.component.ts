import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient } from '../models/patient';

@Component({
  selector: 'app-admindash',
  standalone: false,
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css',
})
export class AdmindashComponent {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatientsList().subscribe(
      (data: any) => {
        this.patients = data;
        console.log(this.patients);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  delete(id: number) {
    this.patientService.deletePatient(id).subscribe((data) => {
      console.log('Patient deleted successfully', data);
      this.getPatients();
    });
  }
}
