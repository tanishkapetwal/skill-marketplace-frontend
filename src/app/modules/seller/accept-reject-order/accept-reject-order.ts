import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accept-reject-order',
  imports: [FormsModule],
  templateUrl: './accept-reject-order.html',
  styleUrl: './accept-reject-order.css'
})
export class AcceptRejectOrder {

  private baseUrl = 'http://localhost:8081/seller'; 

  constructor(private http: HttpClient) {const token = localStorage.getItem('token');}

  changeStatus(form: any) {
    const orderId = form.value.orderId;
    const status = form.value.status;

    this.http.put(`${this.baseUrl}/${orderId}/change-status?status=${status}`, {})
      .subscribe({
        next: () => alert('Status updated successfully!'),
        error: (err) => alert('Error updating status: ' + err.message)
      });

    form.reset();
  }
}