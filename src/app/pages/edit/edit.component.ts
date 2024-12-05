import { Component } from '@angular/core';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';
import {BookingFormComponent} from '../../components/booking/booking-form/booking-form.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, BookingFormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

}
