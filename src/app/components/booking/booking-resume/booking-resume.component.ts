import { Component, Input } from '@angular/core';
import { Booking, BookingStatus } from '../../../models/booking.model';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';
import {BookingService} from '../../../services/booking.service';

@Component({
  selector: 'app-booking-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-resume.component.html',
  styleUrl: './booking-resume.component.css'
})
export class BookingResumeComponent {

  @Input()
  bookInput: Booking = new Booking(0, "José Carlos", "689934934", "jparrom736@iescarrillo.es", 2, "Reserva de una mesa en terraza", new Date("2024-12-28T20:30:00"), new Date("2024-12-03T12:40:00"), BookingStatus.CONFIRM);

  constructor(private bookingService: BookingService, private routerService: Router) {
  }

  deleteBook(id: number): void{
    this.bookingService.deleteBook(id);
  }

  modifyBook(bookId: number) {
    this.routerService.navigate([`edit/${bookId}`])
  }

}
