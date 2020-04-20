import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { Order } from "../models/order";
import { ORDERS } from "../mocks/mock-orders";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrders() : Observable<Order[]> {
    return of(ORDERS);
  }
}
