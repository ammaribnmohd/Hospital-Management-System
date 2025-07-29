import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = `${environment.apiUrl}/v2`;

  constructor(private http: HttpClient) { }
  
  getAllAppointments():Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}`);
  }
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.baseUrl}`, appointment);
  }


}
