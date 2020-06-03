import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search-resutls-card",
  templateUrl: "./search-resutls-card.component.html",
  styleUrls: ["./search-resutls-card.component.scss"],
})
export class SearchResutlsCardComponent implements OnInit {
  @Input() order: any[] = [];
  @Input() checked: boolean;

  @Output() checkedItem: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    // console.log(this.checked);
  }

  orderChange() {
    console.log(this.order['checked']);

    this.checkedItem.emit(this.order['id']);
  }

}
