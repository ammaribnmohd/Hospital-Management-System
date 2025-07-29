import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = `${environment.apiUrl}/v1`;
  constructor(private http: HttpClient) { 
  }

  getPatientsList(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/patients`);
  }
  deletePatient(id: number): Observable<object> {
    return this.http.delete(`${this.baseUrl}/patients/${id}`);
  }
}
