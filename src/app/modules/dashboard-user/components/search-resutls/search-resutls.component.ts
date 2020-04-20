import { Component, OnInit } from "@angular/core";
import { MessageService } from "./../../services/message.service";
import { FruitsService } from "./../../services/fruits.service";
import { OrderService } from "./../../services/order.service";
import { Order } from "./../../models/order";
@Component({
  selector: "app-search-resutls",
  templateUrl: "./search-resutls.component.html",
  styleUrls: ["./search-resutls.component.scss"],
})
export class SearchResutlsComponent implements OnInit {
  orders: any[];
  message: string;
  fruitsData: any[] = ["a", "b"];
  master_check: boolean = false;
  constructor(
    private messageService: MessageService,
    private fruitsService: FruitsService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.messageService.sharedMessage.subscribe(
      (message) => (this.message = message)
    );

    this.fruitsService.fruitsObs.subscribe(
      (fruits) => (this.fruitsData = fruits)
    );

    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe((orders) => (this.orders = orders));
  }

  checkAll() {
    this.master_check = !this.master_check;
  }
}
