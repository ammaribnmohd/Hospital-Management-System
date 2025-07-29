import { Component } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  
  
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentService.getAllAppointments().subscribe(data => {
      
      this.appointments = data;

    });
  }
  delete(id: number) {
    this.appointmentService.deleteAppointment(id).subscribe(data =>{
      console.log("Appointment deleted successfully", data);
      this.getAppointments();
    })
  }
}
