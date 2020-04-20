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
  master_checked: boolean = false;
  checkedItems: any[] = [];
  selectedOrders: any;
  showButton: boolean = false;

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
    this.addChecked();
    this.showSelectedOrders();

    console.log(this.orders);
  }

  getOrders() {
    this.orderService.getOrders().subscribe((orders) => (this.orders = orders));
  }

  addChecked() {
    this.orders.forEach((order) => {
      if (order.id == "8") {
        order["checked"] = true;
      } else {
        order["checked"] = false;
      }
    });
  }

  checkAll() {
    for (let order of this.orders) {
      order.checked = this.master_checked;
    }

    this.showSelectedOrders();
  }

  showSelectedOrders() {
    this.selectedOrders = this.orders.filter((order) => order.checked == true);
    this.showButton = this.selectedOrders.length;

    this.selectedOrders = JSON.stringify(this.selectedOrders);
  }

  checkedItem(item) {
    let checked_count = 0;

    this.orders.forEach((order) => {
      if (order.checked) {
        checked_count++;
      }
    });

    this.master_checked = checked_count == this.orders.length;

    this.showSelectedOrders();
  }
}
