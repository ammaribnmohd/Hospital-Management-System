import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  getPatients() {
    throw new Error('Method not implemented.');
  }

  private baseUrl ="http://localhost:8080/api/v1";
  constructor(private http: HttpClient) { 
    console.log('API URL:', this.baseUrl); // Debug log
  }

  getPatientsList(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}`);
  }

}
