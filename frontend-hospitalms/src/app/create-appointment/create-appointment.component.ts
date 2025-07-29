import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  standalone: false,
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {

  appointment: Appointment = new Appointment();
  

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  saveAppointment() {
    this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
      console.log("Appointment created successfully", data);
      // Optionally, reset the form or redirect the user
      this.gotoAppointments();
    });
  }

  onSubmit() {
    this.saveAppointment();
  }
  
  gotoAppointments() {
    this.router.navigate(['/appointmentlist']);
  }
}
