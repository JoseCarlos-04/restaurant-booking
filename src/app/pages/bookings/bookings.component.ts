import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';
import {BookingResumeComponent} from '../../components/booking/booking-resume/booking-resume.component';
import {Booking} from '../../models/booking.model';
import {BookingService} from '../../services/booking.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent, BookingResumeComponent],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookings = this.bookingService.getBooks();
  }
}
