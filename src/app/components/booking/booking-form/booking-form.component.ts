import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Booking, BookingStatus} from '../../../models/booking.model';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingService} from '../../../services/booking.service';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent implements OnInit, OnChanges {
  formBook: FormGroup;

  @Input()
  bookEdit: Booking | null = null;

  constructor(private route: ActivatedRoute, private routerService: Router, private bookService: BookingService, formBuilder: FormBuilder) {
    this.formBook = formBuilder.group({
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.bookEdit = this.bookService.getBookById(id);

      if (this.bookEdit) {
        this.formBook.patchValue({
          nombre: this.bookEdit.client,
          telefono: this.bookEdit.phone,
          email: this.bookEdit.email,
          personas: this.bookEdit.persons,
          nota: this.bookEdit.notes,
          fechaReserva: this.bookEdit.date
        });
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bookEdit'].currentValue) {
      const book = changes['bookEdit'].currentValue as Booking;
      this.formBook.patchValue({
        nombre: book.client,
        telefono: book.phone,
        email: book.email,
        personas: book.persons,
        nota: book.notes,
        fechaReserva: book.date
      })
    }
  }

  onSubmit() {
    if (this.formBook.valid) {
      let bookForm = this.formBook.value;

      if(this.bookEdit){
        let book: Booking = new Booking(this.bookEdit?.id, bookForm.client, bookForm.phone, bookForm.email, bookForm.persons, bookForm.notes, bookForm.date, new Date(), BookingStatus.CONFIRM);

        this.bookService.addBook(book);

        this.routerService.navigate(['/bookings']);
      }
    }
  }

}
